
import { SimpleLayout } from "@portaljs/core"
import { useState } from "react"
import { useRouter } from "next/router"
import Resume from "@/components/Resume";

export default function About (){

    

    return(
    <SimpleLayout showSidebar="true" showToc="true">
        
        <div className="font-mono">
            <div className="container max-h-fit">
                <Resume />
            </div>
        </div>
    </SimpleLayout>
    )
}