(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var o=t(2),r=t(6),c=t(0),s=t(147),i=t(152),a=t(149),u={id:"custom-sort",title:"Custom sort"},m={id:"examples/custom-sort",title:"Custom sort",description:"You can customize the sort plugin by using the compare function. Each column accepts a custom compare function.",source:"@site/docs/examples/custom-sort.md",permalink:"/docs/examples/custom-sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/custom-sort.md",sidebar:"sidebar",previous:{title:"Multi column sort",permalink:"/docs/examples/multi-sort"}},p=[],d={rightToc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can customize the sort plugin by using the ",Object(s.b)("inlineCode",{parentName:"p"},"compare")," function. Each column accepts a custom ",Object(s.b)("inlineCode",{parentName:"p"},"compare"),' function.\nIn this example, we are sorting the "Phone Number" column based on the ',Object(s.b)("em",{parentName:"p"},"last 4 digits"),":"),Object(s.b)(a.a,{children:"\nconst grid = new Grid({\n  columns: [\n    'Name',\n    'Email',\n    { \n      name: 'Phone Number',\n      sort: {\n        compare: (a, b) => {\n          const code = (x) => x.split(' ').slice(-1)[0];\n          \n          if (code(a) > code(b)) {\n            return 1;\n          } else if (code(b) > code(a)) {\n            return -1;\n          } else {\n            return 0;\n          }\n        }\n      }\n    }\n  ],\n  sort: true,\n  data: [\n    ['John', 'john@example.com', '+353 40 222 3333'],\n    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '+355 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '+313 333 1923']\n  ]\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:i.a,CodeBlock:a.a,useEffect:c.useEffect,useRef:c.useRef},mdxType:"CodeBlock"}))}l.isMDXComponent=!0}}]);