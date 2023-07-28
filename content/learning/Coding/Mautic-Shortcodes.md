---
title: Mautic-Shortcodes
description: Some useful shortcodes for Mautic open-source email platform
date: 2023-01-04
showToc: true
showSidebar: true
tags:
  - Mautic
  - Shortcodes
---

# mautic
Short list of useful code for Mautic open-source platform

## Front-end customization

**Top left logo:**

Open `/app/bundles/CoreBundle/Views/LeftPanel/index.html.php`
Replace the SVG inside of the tag with your own image.

**Login:**

Open `/app/bundles/UserBundle/Views/Security/base.html.php`
Repace the SVG with your own image.


**Left buttons menu:**

    Open Core Bundle go to views in views open default folder there will be
    file named head.php.html.edit that file

**Remove Footer from Dashboard (Copyrights Mautic)**

    Open base.html.php from here - /var/www/html/app/bundles/CoreBundle/Views/Default
    Disable or Remove line 42-47
    
    
**Change Favicon on Dashboard**

    open head.html.php from here - /var/www/html/app/bundles/CoreBundle/Views/Default
    ---- Replace the Favicon by the desired icon file/image name on line 14, 15 and 16
    
    
**Change logo (from Mautic to Your Brand) on Dashboard**

    open and look in index.html.php from here - /var/www/html/app/bundles/CoreBundle/Views/LeftPanel
    
**Change 403, 404, 500 Error's Bot icon and texts**

    open base.html.php from here - /var/www/html/app/bundles/CoreBundle/Views/Error
    ---- In line 31 replace Mautibot by Your Brand
    ---- In line-34 change the href value to this - http://www.yoursite.com/report-issue
    
**Change 403, 404, 500 Exception's Bot icon and texts**

    open base.html.php from here - /var/www/html/app/bundles/CoreBundle/Views/Error
    ---- Replace line-37 by this - <img class=""img-responsive"" src=""getUrl('media/images/logo.png') ?>"" alt="Logo"/>
    ---- In line 42 replace Mautibot by Your Brand
    ---- In line-45 change the href value to this - http://www.yoursite.com/report-issue
    
**Change Login Form Title, Favicon, Logo (Mautic to Your Brand) and Footer**

      open base.html.php from here - /var/www/html/app/bundles/UserBundle/Views/Security
      ---- Change 'Mautic' to 'Your Brand' in line - 15
      ---- Replace line-17 and 18 by this - <link rel=""icon"" type=""image/x-icon"" href=""getUrl('media/images/logo.png') ?>"" />
      getUrl('media/images/logo.png') ?>"" /> ---- Replace line-30 to 39 by this - getUrl('media/images/logo.png') ?>"" class=""login-page-logo""         alt="Your Brand"/> ---- After applying the above changes. Remove line-42 to 46 to remove Copyright Mautic from the login page. Or look for the below code and delete them --- 
      
**Change the Mauticbot icon from Notifications/Message**

    open noresults.html.php from here - /app/bundles/CoreBundle/Views/Helper
    ---- Replace line - 12 by this -
    <img class=""img-responsive"" src=""getUrl('media/images/touchbaseicon-Light.png') ?>"" alt="Your Brand"/>"
    
**Change 'Mautic' from Password Reset email subject**

    open message.ini from here - /app/bundles/UserBundle/Translations/en_US/messages.ini
    ---- Replace ""Mautic"" by "Your Brand" in line-57
    
**Chenge page title**

    If you're using < 2.6, it should be line 1510 and 1513 in:
    /app/bundles/CoreBundle/Assets/js/1.core.js
    or if you're on 2.6 it is on line 113 and 116 in:
    /app/bundles/CoreBundle/Assets/js/1a.content.js
    After updating those files, you have to regenerate mautic's assets with the command line console.