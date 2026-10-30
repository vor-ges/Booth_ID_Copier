# Booth ID Copier

A Chrome extension for copying BOOTH product IDs from product links.

## Concept

Booth ID Copier was created to make it easier to retrieve product IDs from BOOTH URLs.

Instead of opening a product page and manually extracting its ID, you can use the browser's context menu to copy the ID directly from a product link.

## Overview

- **Platform:** Chromium-based browsers supporting Manifest V3
- **Version:** 1.3
- **Context Menu:** `Copy Booth ID`

## Features

- **Context Menu Integration** — Adds an option to the right-click menu for links.
- **Automatic ID Extraction** — Extracts the numeric product ID from URLs containing `/items/`.
- **Clipboard Copying** — Copies the extracted ID to the clipboard.
- **Failure Notification** — Displays an alert if copying fails.

## Requirements

- A Chromium-based browser with support for Manifest V3
- Permissions for context menus, scripting, and active-tab access

## How to use

1. Install the extension in your browser.
2. Open a page containing a link to a BOOTH product.
3. Right-click the product link.
4. Select `Copy Booth ID`.
5. Paste the copied ID wherever you need it.

## Important notes

- The extension extracts the numeric ID from a URL path matching `/items/` followed by digits.
- The context-menu option is available for links, but an ID is copied only when the link URL matches the expected pattern.
- The extension copies the product ID, not the entire URL.
- Clipboard access may fail depending on the browser environment or permissions.

## Development

This project was created to reduce the steps needed to retrieve BOOTH product IDs.

## Author

vor_ges

## Licence

This project is licensed under the MIT License. See the LICENSE file for details.

[MIT License](https://opensource.org/license/mit)  
