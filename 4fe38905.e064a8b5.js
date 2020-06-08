(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),o=n(0),r=n(147),c=n(152),d=n(149),p={id:"import-function",title:"Dynamic data import"},s={id:"examples/import-function",title:"Dynamic data import",description:"The data attribute accepts a function as well:",source:"@site/docs/examples/import-function.md",permalink:"/docs/examples/import-function",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/import-function.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1590841260,sidebar:"sidebar",previous:{title:"Wide Table",permalink:"/docs/examples/wide-table"},next:{title:"Async data import",permalink:"/docs/examples/import-async"}},m=[],u={rightToc:m};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"data")," attribute accepts a function as well:"),Object(r.b)(d.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  data: () => [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n  \n  useEffect(() => {\n    grid.render(document.getElementById('wrapper'));\n  });\n  \n  return (\n    <div id=\"wrapper\" />\n  );\n}\n"},live:!0,scope:{Grid:c.a,CodeBlock:d.a,useEffect:o.useEffect},mdxType:"CodeBlock"}))}l.isMDXComponent=!0}}]);