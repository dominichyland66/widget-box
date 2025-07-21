This code demonstrates Angular.
If you use the terminal and run 'ng serve' the Angular server
Angular listens on : http://localhost:4200/
You will see two pages with different coloured Angular components.
This is CLASSIC Angular
I have then used Angular Elements to take all of these components
And package them up as a standalone js file.
The Js File contains just enough Angular to run the compoments.
The js file also contains the css that defines the look and feel of the component
It IS possible to generate components in such a way as they respect the
style of the host page, typically typography and colours.
You can see that in this demo the two lines in the red box are not broken, even though that 
component is being reused it IS still impacted by the underlying CSS
There is a lot more detail in how all this works that I know about
You can copy this component someplace and run it there but for this demonstratesI have created a Demo.html pages
Run a different server: python3 -m http.server 8080
and call http://localhost:8080/Demo.html
The exact same components will render in the simple HTML page.
The main.js and polyfills.js are loaded to the browser and rendered there.
Any intelligence would reside at the server side and use a BFF etc.

What's in the 2.6MB of JS file
1. Angular core runtime + platform-browser.
2. Zone.js.
3. Reflection helpers / tslib / RxJS (if pulled in).
4. All CSS + HTML for the TermsBox.
5. Possibly extra framework code dragged in by provider imports 
(e.g., BrowserModule brings a lot — common directives, sanitization, 
dom adapter, error handler, etc.).
6. Maybe unused stuff is still referenced because of how the build is 
configured (tsconfig include globs; prod tree‑shaking not fully 
engaged if you built the development config).

So of course you bundle components, download 2 or 3 JS files
The browser caches them and uses components as it needs to from the 2 or 3 bundled files.