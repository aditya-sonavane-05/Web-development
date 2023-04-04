# HTML Basics

HTML, or HyperText Markup Language, is the language used for web documents. It is not a programming language, but rather a language that identifies the meaning, purpose, and structure of text within a document. HTML uses a series of tags that are integrated into a text document. These tags are then read by a browser, which translates the tags into the formatting that they represent.

## Tags

HTML tags are used to mark-up HTML elements. HTML tags are surrounded by the two characters `<` and `>`. The surrounding characters are called angle brackets. HTML tags normally come in pairs like `<b>` and `</b>`. The first tag in a pair is the start tag, and the second tag is the end tag. The text between the start and end tags is the element content. HTML tags are not case sensitive; `<b>` means the same as `<B>`.

## Structure Tags in HTML

`<HTML></HTML>`: These tags begin and end an HTML document.

`<HEAD></HEAD>`: These tags are in the beginning of the document. Important information is stored in between these tags including: title, meta-data, styles, and programming scripts.

`<TITLE></TITLE>`: These tags are in-between the HEAD tags and contain the text that appears in the title of the web page.

`<BODY></BODY>`: As you may have guessed, the BODY tags contain all the text in the body of the document.

### Block Level tags

`<h1>` to `<h6>`: Headings are defined with these tags, where `<h1>` defines the largest headings and `<h6>` defines the smallest headings.

`<p>`: Paragraphs are defined with this tag.

`<br/>`: Use this tag if you want a line break (a new line) without starting a new paragraph.

`<hr>`: The hr element is used for horizontal rules that act as dividers between sections.

### Anchor Tag

HTML uses the `<a>` anchor tag to create a link to another document or web page. An anchor can point to any resource on the web: an HTML page, an image, a sound file, a movie, etc. The syntax of creating an anchor is: `<a href="url">Text to be displayed</a>`. The `<a>` tag is used to create an anchor to link from, the `href` attribute is used to tell the address of the document or page we are linking to, and the words between the open and close of the anchor tag will be displayed as a hyperlink.

### Target Attribute

With the target attribute, you can define where the linked document will be opened. By default, the link will open in the current window. The code below will open the document in a new browser window.

