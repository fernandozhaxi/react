webpackJsonp([0x9644e161a0f8],{641:function(e,o){e.exports={data:{markdownRemark:{html:'<p>I’m excited to announce that today we’re releasing React v0.9, which incorporates many bug fixes and several new features since the last release. This release contains almost four months of work, including over 800 commits from over 70 committers!</p>\n<p>Thanks to everyone who tested the release candidate; we were able to find and fix an error in the event handling code, we upgraded envify to make running browserify on React faster, and we added support for five new attributes.</p>\n<p>As always, the release is available for download from the CDN:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.9.0.js">https://fb.me/react-0.9.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.9.0.min.js">https://fb.me/react-0.9.0.min.js</a></li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.9.0.js">https://fb.me/react-with-addons-0.9.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.9.0.min.js">https://fb.me/react-with-addons-0.9.0.min.js</a></li>\n<li><strong>In-Browser JSX Transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.9.0.js">https://fb.me/JSXTransformer-0.9.0.js</a></li>\n</ul>\n<p>We’ve also published version <code>0.9.0</code> of the <code>react</code> and <code>react-tools</code> packages on npm and the <code>react</code> package on bower.</p>\n<h2 id="whats-new"><a href="#whats-new" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s New?</h2>\n<p>This version includes better support for normalizing event properties across all supported browsers so that you need to worry even less about cross-browser differences. We’ve also made many improvements to error messages and have refactored the core to never rethrow errors, so stack traces are more accurate and Chrome’s purple break-on-error stop sign now works properly.</p>\n<p>We’ve also added to the add-ons build <a href="/docs/test-utils.html">React.addons.TestUtils</a>, a set of new utilities to help you write unit tests for React components. You can now simulate events on your components, and several helpers are provided to help make assertions about the rendered DOM tree.</p>\n<p>We’ve also made several other improvements and a few breaking changes; the full changelog is provided below.</p>\n<h2 id="jsx-whitespace"><a href="#jsx-whitespace" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Whitespace</h2>\n<p>In addition to the changes to React core listed below, we’ve made a small change to the way JSX interprets whitespace to make things more consistent. With this release, space between two components on the same line will be preserved, while a newline separating a text node from a tag will be eliminated in the output. Consider the code:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  Monkeys:\n  {listOfMonkeys} {submitButton}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>In v0.8 and below, it was transformed to the following:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>DOM<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token string">" Monkeys: "</span><span class="token punctuation">,</span>\n  listOfMonkeys<span class="token punctuation">,</span> submitButton\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>In v0.9, it will be transformed to this JS instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>DOM<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">  <span class="token string">"Monkeys:"</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">  listOfMonkeys<span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> submitButton\n</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>We believe this new behavior is more helpful and eliminates cases where unwanted whitespace was previously added.</p>\n<p>In cases where you want to preserve the space adjacent to a newline, you can write <code>{\'Monkeys: \'}</code> or <code>Monkeys:{\' \'}</code> in your JSX source. We’ve included a script to do an automated codemod of your JSX source tree that preserves the old whitespace behavior by adding and removing spaces appropriately. You can <a href="https://github.com/facebook/react/blob/master/npm-jsx_whitespace_transformer/README.md">install jsx_whitespace_transformer from npm</a> and run it over your source tree to modify files in place. The transformed JSX files will preserve your code’s existing whitespace behavior.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li>The lifecycle methods <code>componentDidMount</code> and <code>componentDidUpdate</code> no longer receive the root node as a parameter; use <code>this.getDOMNode()</code> instead</li>\n<li>Whenever a prop is equal to <code>undefined</code>, the default value returned by <code>getDefaultProps</code> will now be used instead</li>\n<li><code>React.unmountAndReleaseReactRootNode</code> was previously deprecated and has now been removed</li>\n<li><code>React.renderComponentToString</code> is now synchronous and returns the generated HTML string</li>\n<li>Full-page rendering (that is, rendering the <code>&#x3C;html></code> tag using React) is now supported only when starting with server-rendered markup</li>\n<li>On mouse wheel events, <code>deltaY</code> is no longer negated</li>\n<li>When prop types validation fails, a warning is logged instead of an error thrown (with the production build of React, type checks are now skipped for performance)</li>\n<li>On <code>input</code>, <code>select</code>, and <code>textarea</code> elements, <code>.getValue()</code> is no longer supported; use <code>.getDOMNode().value</code> instead</li>\n<li><code>this.context</code> on components is now reserved for internal use by React</li>\n</ul>\n<h4 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>React now never rethrows errors, so stack traces are more accurate and Chrome’s purple break-on-error stop sign now works properly</li>\n<li>Added support for SVG tags <code>defs</code>, <code>linearGradient</code>, <code>polygon</code>, <code>radialGradient</code>, <code>stop</code></li>\n<li>\n<p>Added support for more attributes:</p>\n<ul>\n<li><code>crossOrigin</code> for CORS requests</li>\n<li><code>download</code> and <code>hrefLang</code> for <code>&#x3C;a></code> tags</li>\n<li><code>mediaGroup</code> and <code>muted</code> for <code>&#x3C;audio></code> and <code>&#x3C;video></code> tags</li>\n<li><code>noValidate</code> and <code>formNoValidate</code> for forms</li>\n<li><code>property</code> for Open Graph <code>&#x3C;meta></code> tags</li>\n<li><code>sandbox</code>, <code>seamless</code>, and <code>srcDoc</code> for <code>&#x3C;iframe></code> tags</li>\n<li><code>scope</code> for screen readers</li>\n<li><code>span</code> for <code>&#x3C;colgroup></code> tags</li>\n</ul>\n</li>\n<li>Added support for defining <code>propTypes</code> in mixins</li>\n<li>Added <code>any</code>, <code>arrayOf</code>, <code>component</code>, <code>oneOfType</code>, <code>renderable</code>, <code>shape</code> to <code>React.PropTypes</code></li>\n<li>Added support for <code>statics</code> on component spec for static component methods</li>\n<li>On all events, <code>.currentTarget</code> is now properly set</li>\n<li>On keyboard events, <code>.key</code> is now polyfilled in all browsers for special (non-printable) keys</li>\n<li>On clipboard events, <code>.clipboardData</code> is now polyfilled in IE</li>\n<li>On drag events, <code>.dataTransfer</code> is now present</li>\n<li>Added support for <code>onMouseOver</code> and <code>onMouseOut</code> in addition to the existing <code>onMouseEnter</code> and <code>onMouseLeave</code> events</li>\n<li>Added support for <code>onLoad</code> and <code>onError</code> on <code>&#x3C;img></code> elements</li>\n<li>Added support for <code>onReset</code> on <code>&#x3C;form></code> elements</li>\n<li>The <code>autoFocus</code> attribute is now polyfilled consistently on <code>input</code>, <code>select</code>, and <code>textarea</code></li>\n</ul>\n<h4 id="bug-fixes"><a href="#bug-fixes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li>React no longer adds an <code>__owner__</code> property to each component’s <code>props</code> object; passed-in props are now never mutated</li>\n<li>When nesting top-level components (e.g., calling <code>React.renderComponent</code> within <code>componentDidMount</code>), events now properly bubble to the parent component</li>\n<li>Fixed a case where nesting top-level components would throw an error when updating</li>\n<li>Passing an invalid or misspelled propTypes type now throws an error</li>\n<li>On mouse enter/leave events, <code>.target</code>, <code>.relatedTarget</code>, and <code>.type</code> are now set properly</li>\n<li>On composition events, <code>.data</code> is now properly normalized in IE9 and IE10</li>\n<li>CSS property values no longer have <code>px</code> appended for the unitless properties <code>columnCount</code>, <code>flex</code>, <code>flexGrow</code>, <code>flexShrink</code>, <code>lineClamp</code>, <code>order</code>, <code>widows</code></li>\n<li>Fixed a memory leak when unmounting children with a <code>componentWillUnmount</code> handler</li>\n<li>Fixed a memory leak when <code>renderComponentToString</code> would store event handlers</li>\n<li>Fixed an error that could be thrown when removing form elements during a click handler</li>\n<li>Boolean attributes such as <code>disabled</code> are rendered without a value (previously <code>disabled="true"</code>, now simply <code>disabled</code>)</li>\n<li><code>key</code> values containing <code>.</code> are now supported</li>\n<li>Shortened <code>data-reactid</code> values for performance</li>\n<li>Components now always remount when the <code>key</code> property changes</li>\n<li>Event handlers are attached to <code>document</code> only when necessary, improving performance in some cases</li>\n<li>Events no longer use <code>.returnValue</code> in modern browsers, eliminating a warning in Chrome</li>\n<li><code>scrollLeft</code> and <code>scrollTop</code> are no longer accessed on document.body, eliminating a warning in Chrome</li>\n<li>General performance fixes, memory optimizations, improvements to warnings and error messages</li>\n</ul>\n<h3 id="react-with-addons"><a href="#react-with-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React with Addons</h3>\n<ul>\n<li><code>React.addons.TestUtils</code> was added to help write unit tests</li>\n<li><code>React.addons.TransitionGroup</code> was renamed to <code>React.addons.CSSTransitionGroup</code></li>\n<li><code>React.addons.TransitionGroup</code> was added as a more general animation wrapper</li>\n<li><code>React.addons.cloneWithProps</code> was added for cloning components and modifying their props</li>\n<li>Bug fix for adding back nodes during an exit transition for CSSTransitionGroup</li>\n<li>Bug fix for changing <code>transitionLeave</code> in CSSTransitionGroup</li>\n<li>Performance optimizations for CSSTransitionGroup</li>\n<li>On checkbox <code>&#x3C;input></code> elements, <code>checkedLink</code> is now supported for two-way binding</li>\n</ul>\n<h3 id="jsx-compiler-and-react-tools-package"><a href="#jsx-compiler-and-react-tools-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Compiler and react-tools Package</h3>\n<ul>\n<li>Whitespace normalization has changed; now space between two tags on the same line will be preserved, while newlines between two tags will be removed</li>\n<li>The <code>react-tools</code> npm package no longer includes the React core libraries; use the <code>react</code> package instead.</li>\n<li><code>displayName</code> is now added in more cases, improving error messages and names in the React Dev Tools</li>\n<li>Fixed an issue where an invalid token error was thrown after a JSX closing tag</li>\n<li><code>JSXTransformer</code> now uses source maps automatically in modern browsers</li>\n<li><code>JSXTransformer</code> error messages now include the filename and problematic line contents when a file fails to parse</li>\n</ul>',excerpt:"I’m excited to announce that today we’re releasing React v0.9, which incorporates many bug fixes and several new features since the last release. This release contains almost four months of work, including over 800 commits from over 70 committers! Thanks to everyone who tested the release candidate; we were able to find and fix an error in the event handling code, we upgraded envify to make running browserify on React faster, and we added support for five new attributes. As always, the release…",frontmatter:{title:"React v0.9",next:null,prev:null,author:[{frontmatter:{name:"Sophie Alpert",url:"https://sophiealpert.com"}}]},fields:{date:"February 20, 2014",path:"blog/2014-02-20-react-v0.9.md",slug:"/blog/2014/02/20/react-v0.9.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2014/02/20/react-v0.9.html"}}}});
//# sourceMappingURL=path---blog-2014-02-20-react-v-0-9-html-36a617357d03163ac992.js.map