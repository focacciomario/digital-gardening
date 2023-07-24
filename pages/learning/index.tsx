import fs from "fs";
import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { BlogsList, SimpleLayout, DocsLayout, UnstyledLayout } from "@portaljs/core";
import clientPromise from "../../lib/mddb.mjs";
import computeFields from "../../lib/computeFields";
import type { CustomAppProps } from "../_app";

interface BlogIndexPageProps extends CustomAppProps {
    blogs: any[]; // TODO types
}

export default function Learning({
    blogs,
    meta: { title, description },
}: BlogIndexPageProps) {
    return (
        
        <SimpleLayout title={title} description={description}>
            
            <BlogsList blogs={blogs} />
        </SimpleLayout>
        
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<BlogIndexPageProps>
> => {
    const mddb = await clientPromise;
    const blogFiles = await mddb.getFiles({ folder: "learning" });
    const blogsMetadataPromises = blogFiles.map(async (b) => {
        const source = fs.readFileSync(b.file_path, { encoding: "utf-8" });

        // TODO temporary replacement for contentlayer's computedFields
        const frontMatterWithComputedFields = await computeFields({
            frontMatter: b.metadata,
            urlPath: b.url_path,
            filePath: b.file_path,
            source,
        });

        return frontMatterWithComputedFields;
    });

    const blogsList = await Promise.all(blogsMetadataPromises);

    return {
        
        props: {
            meta: {
                title: "Learning notes",
                description: "Una raccolta di note universitarie e non. Personalmente, utilizzo questi testi come riferimento o spunto durante gli studi; mi auguro possano essere utili anche a voi altri.",
                showSidebar: false,
                showToc: false,
                showComments: false,
                showEditLink: false,
                urlPath: "/learn",
            },
            blogs: blogsList,
        },
    };
};