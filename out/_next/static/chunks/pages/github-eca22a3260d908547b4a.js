(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{8535:function(e,s,t){"use strict";var a=t(5893),i=t(8347),n=t.n(i),c=t(5022),l=t.n(c),r=t(3679),o=t.n(r);s.Z=function(e){var s=e.navResult,t=e.listResult,i=e.defaultNavResult;if(s===l().PROJECTS||!s&&i===l().PROJECTS){var c=n().allProjects.map((function(e){return(0,a.jsxs)("div",{className:o().projectItem,children:[(0,a.jsx)("a",{href:e.slug,children:e.title}),(0,a.jsx)("img",{src:"https:"+e.thumbnail,width:80,height:80}),(0,a.jsxs)("p",{children:["[",e.tags,"]"]})]},e.slug)})),r=n().webProjects.map((function(e){return(0,a.jsxs)("div",{className:o().projectItem,children:[(0,a.jsx)("a",{href:e.slug,children:e.title}),(0,a.jsx)("img",{src:"https:"+e.thumbnail,width:80,height:80}),(0,a.jsxs)("p",{children:["[",e.tags,"]"]})]},e.slug)})),h=n().craftProjects.map((function(e){return(0,a.jsxs)("div",{className:o().projectItem,children:[(0,a.jsx)("a",{href:e.slug,children:e.title}),(0,a.jsx)("img",{src:"https:"+e.thumbnail,width:80,height:80}),(0,a.jsxs)("p",{children:["[",e.tags,"]"]})]},e.slug)})),m=n().hybridProjects.map((function(e){return(0,a.jsxs)("div",{className:o().projectItem,children:[(0,a.jsx)("a",{href:e.slug,children:e.title}),(0,a.jsx)("img",{src:"https:"+e.thumbnail,width:80,height:80}),(0,a.jsxs)("p",{children:["[",e.tags,"]"]})]},e.slug)}));return"web"===t?(0,a.jsx)("div",{className:o().content,children:(0,a.jsx)("div",{className:o().projectContainer,children:r})}):"craft"===t?(0,a.jsx)("div",{className:o().content,children:(0,a.jsx)("div",{className:o().projectContainer,children:h})}):"hybrid"===t?(0,a.jsx)("div",{className:o().content,children:(0,a.jsx)("div",{className:o().projectContainer,children:m})}):(0,a.jsx)("div",{className:o().content,children:(0,a.jsx)("div",{className:o().projectContainer,children:c})})}return(0,a.jsx)("div",{})}},5017:function(e,s,t){"use strict";var a=t(5893),i=t(5022),n=t.n(i),c=t(3679),l=t.n(c);s.Z=function(e){var s=e.navResult,t=e.onListClick,i=e.defaultResult;if(s===n().GITHUB||!s&&i===n().GITHUB)return(0,a.jsx)("div",{className:l().list,children:(0,a.jsxs)("div",{className:l().listContent,children:[(0,a.jsxs)("p",{children:["Many of my projects live within ",(0,a.jsx)("a",{href:"https://github.com/raclim",children:"my Github"}),"."]}),(0,a.jsx)("p",{className:l().tidbit,children:"I love dogs, so my profile image is a shiba inu holding shiba inus."})]})});if(s===n().PROJECTS||!s&&i===n().PROJECTS){var c=["web","craft","hybrid","all"].map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{onClick:t,children:e})},e)}));return(0,a.jsx)("div",{className:l().list,children:(0,a.jsx)("ul",{children:c})})}return s===n().RESUME||!s&&i===n().RESUME?(0,a.jsx)("div",{className:l().list,children:(0,a.jsxs)("div",{className:l().listContent,children:[(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://drive.google.com/file/d/13rVSc8YAzbk_JYJsq7exMFY6w5MPBd5A/view?usp=sharing",target:"blank",children:"Rachel's Resume"})}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://www.linkedin.com/in/rachel-lim-324a8ab6/",children:"LinkedIn"})}),(0,a.jsx)("p",{className:l().tidbit,children:"I used to spend summer vacations working at an ice cream store. They specialized in matcha flavored products and teaware!"})]})}):s===n().BLOG||!s&&i===n().BLOG?(0,a.jsx)("div",{className:l().list,children:(0,a.jsxs)("div",{className:l().listContent,children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("a",{href:"https://raclims.wordpress.com",children:"My student blog"})," documents my experiments and projects, created during my time as a master's candidate at ITP."]}),(0,a.jsx)("p",{className:l().tidbit,children:"My go-to snack on campus was CHEEZ-IT."})]})}):s===n().NAME||!s&&i===n().NAME?(0,a.jsx)("div",{className:l().list,children:(0,a.jsxs)("div",{className:l().listContent,children:[(0,a.jsx)("p",{children:"Yes that is my name!"}),(0,a.jsx)("p",{className:l().tidbit,children:"I love sushi"})]})}):s===n().ERROR||!s&&i===n().ERROR?(0,a.jsx)("div",{className:l().list,children:"ERROR: unidentified value huehue"}):(0,a.jsx)("div",{className:l().list})}},1844:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(5893),i=t(1664),n=t(130),c=t.n(n);function l(e){var s=e.getNavInput;return(0,a.jsxs)("div",{className:c().navContainer,children:[(0,a.jsxs)("ul",{className:c().navbar,children:[(0,a.jsx)("li",{className:c().navItem,children:(0,a.jsx)(i.default,{href:"/projects",children:(0,a.jsx)("a",{children:"[P] Projects"})})}),(0,a.jsx)("li",{className:c().navItem,children:(0,a.jsx)(i.default,{href:"/resume",children:(0,a.jsx)("a",{children:"[R] Resume"})})}),(0,a.jsx)("li",{className:c().navItem,children:(0,a.jsx)(i.default,{href:"/github",children:(0,a.jsx)("a",{children:"[G] Github"})})}),(0,a.jsx)("li",{className:c().navItem,children:(0,a.jsx)(i.default,{href:"/blog",children:(0,a.jsx)("a",{children:"[B] Blog (from my time as a student)"})})})]}),(0,a.jsxs)("form",{className:c().inputFormat,onSubmit:s,children:[(0,a.jsx)("label",{htmlFor:"choice",children:"[9:30 PM] Enter your choice:  "}),(0,a.jsx)("input",{id:c().navInput,name:"choice",type:"text"})]})]})}},3325:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return b}});var a=t(5893),i=t(5988),n=t(9008),c=t(1844),l=t(5017),r=t(8535),o=t(7294),h=t(5022),m=t.n(h),d=t(3679),u=t.n(d);function b(){var e=(0,o.useState)(),s=e[0],t=e[1],h=(0,o.useState)(),d=h[0],b=h[1];return(0,a.jsxs)("div",{className:"jsx-3379920139 "+(u().homeContainer||""),children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{className:"jsx-3379920139",children:"RACLIM ONLINE | GITHUB"}),(0,a.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"https://raclim.cool/favicon.ico",className:"jsx-3379920139"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com",className:"jsx-3379920139"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0,className:"jsx-3379920139"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap",rel:"stylesheet",className:"jsx-3379920139"})]}),(0,a.jsxs)("main",{className:"jsx-3379920139",children:[(0,a.jsxs)("h1",{className:"jsx-3379920139 "+(u().homeTitle||""),children:[(0,a.jsx)("a",{href:"/",className:"jsx-3379920139",children:"Rachel A Lim"}),(0,a.jsx)("span",{className:"jsx-3379920139 "+(u().korean||""),children:" | \uc784\uc544\ub984"})," ",(0,a.jsx)("span",{className:"jsx-3379920139 "+(u().pronouns||""),children:"| (she/her)"})," ",(0,a.jsx)("span",{className:"jsx-3379920139 "+(u().jobTitles||""),children:"| programmer : creative"})]}),(0,a.jsxs)("div",{className:"jsx-3379920139 "+(u().about||""),children:[(0,a.jsx)("p",{className:"jsx-3379920139",children:" I craft with humor and vulnerability. I love sharing a good giggle. \ud83c\udf08 "}),(0,a.jsxs)("p",{className:"jsx-3379920139",children:["Currently working within the ",(0,a.jsx)("a",{href:"https://vidcode.com/",className:"jsx-3379920139",children:"edtech space"}),"."]}),(0,a.jsx)("p",{className:"jsx-3379920139",children:"(also: a runner, history enthusiast, lover of animal facts)"})]}),(0,a.jsxs)("div",{className:"jsx-3379920139 "+(u().topHolder||""),children:[(0,a.jsx)(c.Z,{getNavInput:function(e){e.preventDefault();var s,a=e.target[0].value,i="R"===a||"r"===a||"Resume"===a||"resume"===a,n="G"===a||"g"===a||"Github"===a||"github"===a,c="B"===a||"b"===a||"blog"===a||"Blog"===a,l="Rachel"===a||"rachel"===a;return s="P"===a||"p"===a||"Projects"===a||"projects"===a?m().PROJECTS:i?m().RESUME:n?m().GITHUB:c?m().BLOG:l?m().NAME:m().ERROR,t(s),s}}),(0,a.jsx)(l.Z,{navResult:s,onListClick:function(e){var s=e.target.innerText;return b(s),s},defaultResult:m().GITHUB})]}),(0,a.jsx)(r.Z,{navResult:s,listResult:d,defaultNavResult:m().GITHUB})]}),(0,a.jsx)("footer",{className:"jsx-3379920139",children:(0,a.jsx)("p",{className:"jsx-3379920139",children:"Rachel Lim 2021 \u2728"})}),(0,a.jsx)(i.default,{id:"3379920139",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]})]})}},5022:function(e){e.exports={PROJECTS:"projects",RESUME:"resume",GITHUB:"github",BLOG:"blog",NAME:"name",ERROR:"ERROR: unidentified value huehue"}},8347:function(e){e.exports={allProjects:[{title:"Destroy Rachel Online",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/1cy3rjyqLOPSN70kMYh8a6/066ec07bad744fcad33fced0b678e86a/rachel.jpg",slug:"destroy-rachel-online",tags:["Web, Game"]},{title:"Love Book",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/3d7DstRvx53wfrshUPNMg7/eee8017088ff921c9c5d351cce03cbf4/girlThumb.png",slug:"love-book",tags:["Illustration"]},{title:"p5.js Search Bar",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/4kZgRlM7DqSVYoDfaZ98ax/64f218f0c29baac3aa50b41cd44cec4b/searchThumb.png?w=300&h=246&q=50",slug:"p5-search-bar",tags:["Web, Open Source"]},{title:"Love Today",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/6DbPHDU41np6Wz9CzNFYLl/09e039537d2748cf6bc4f8f2b4b4d4c0/loveAppThumb.png?w=300&h=301&q=50",slug:"love-app",tags:["Web, App"]},{title:"Rearing Technologies",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/1JsAHnztz6qukpztmN1gPL/2fc013ef24dbf5d03334820f9e83249f/rearThumb.png?w=300&h=300&q=50",slug:"rearing-technologies",tags:["Web, Writing"]},{title:"Silly Duet",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/1ZmufkahHwcYkPliEO6xmp/f00db196320ffabbfadae99982897829/stupidThumb.png",slug:"voice-duet",tags:["Web, Silly"]},{title:"Animations",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2ALbXcb1Lh5TZ54bVinjFv/40f2758f4c3664d09c71d75234ee95af/hardThumb.jpg",slug:"animations",tags:["Stop Motion"]},{title:"Show Yourself",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/5vPLj9J8rGqiys5CHVW7ZD/bf1941fc8cdf26503615fd98e581d2b8/secretThumb.png?w=300&h=292&q=50",slug:"show-yourself",tags:["WebRTC, Game"]},{title:"Soft Steen",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2fH6rIQuy0a5tHbmnZO1W8/15b75f0ca4d44df038467dd8b231863c/steenThumb.png?w=300&h=300&q=50",slug:"soft-steen",tags:["Physical Computing"]},{title:"Buff Cake",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2lOAxai7XGtaKpcwVUAIzk/3d87ba185cf817c92b1b73afa602b423/cakeThumb.jpg",slug:"buff-cake",tags:["Fabrication"]},{title:"ABC Chairs",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2L6jnvC6QpXahrgR5WveId/13dfddcfa52507deeb9d0c7f1e56dc7c/abcThumb.png?w=300&h=299&q=50",slug:"abc-chairs",tags:["Design, Illustration"]}],webProjects:[{title:"Destroy Rachel Online",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/1cy3rjyqLOPSN70kMYh8a6/066ec07bad744fcad33fced0b678e86a/rachel.jpg",slug:"destroy-rachel-online",tags:["Web, Game"]},{title:"p5.js Search Bar",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/4kZgRlM7DqSVYoDfaZ98ax/64f218f0c29baac3aa50b41cd44cec4b/searchThumb.png?w=300&h=246&q=50",slug:"p5-search-bar",tags:["Web, Open Source"]},{title:"Love Today",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/6DbPHDU41np6Wz9CzNFYLl/09e039537d2748cf6bc4f8f2b4b4d4c0/loveAppThumb.png?w=300&h=301&q=50",slug:"love-app",tags:["Web, App"]},{title:"Rearing Technologies",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/1JsAHnztz6qukpztmN1gPL/2fc013ef24dbf5d03334820f9e83249f/rearThumb.png?w=300&h=300&q=50",slug:"rearing-technologies",tags:["Web, Writing"]},{title:"Silly Duet",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/1ZmufkahHwcYkPliEO6xmp/f00db196320ffabbfadae99982897829/stupidThumb.png",slug:"voice-duet",tags:["Web, Silly"]},{title:"Show Yourself",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/5vPLj9J8rGqiys5CHVW7ZD/bf1941fc8cdf26503615fd98e581d2b8/secretThumb.png?w=300&h=292&q=50",slug:"show-yourself",tags:["WebRTC, Game"]}],hybridProjects:[{title:"Rearing Technologies",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/1JsAHnztz6qukpztmN1gPL/2fc013ef24dbf5d03334820f9e83249f/rearThumb.png?w=300&h=300&q=50",slug:"rearing-technologies",tags:["Web, Writing"]},{title:"Soft Steen",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2fH6rIQuy0a5tHbmnZO1W8/15b75f0ca4d44df038467dd8b231863c/steenThumb.png?w=300&h=300&q=50",slug:"soft-steen",tags:["Physical Computing"]}],craftProjects:[{title:"Love Book",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/3d7DstRvx53wfrshUPNMg7/eee8017088ff921c9c5d351cce03cbf4/girlThumb.png",slug:"love-book",tags:["Illustration"]},{title:"Animations",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2ALbXcb1Lh5TZ54bVinjFv/40f2758f4c3664d09c71d75234ee95af/hardThumb.jpg",slug:"animations",tags:["Stop Motion"]},{title:"Soft Steen",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2fH6rIQuy0a5tHbmnZO1W8/15b75f0ca4d44df038467dd8b231863c/steenThumb.png?w=300&h=300&q=50",slug:"soft-steen",tags:["Physical Computing"]},{title:"Buff Cake",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2lOAxai7XGtaKpcwVUAIzk/3d87ba185cf817c92b1b73afa602b423/cakeThumb.jpg",slug:"buff-cake",tags:["Fabrication"]},{title:"ABC Chairs",thumbnail:"//images.ctfassets.net/xrbc1asbsx39/2L6jnvC6QpXahrgR5WveId/13dfddcfa52507deeb9d0c7f1e56dc7c/abcThumb.png?w=300&h=299&q=50",slug:"abc-chairs",tags:["Design, Illustration"]}]}},8324:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/github",function(){return t(3325)}])},3679:function(e){e.exports={homeContainer:"Home_homeContainer__3g9pk",homeTitle:"Home_homeTitle__3BgpL",korean:"Home_korean__1D8PZ",pronouns:"Home_pronouns__GnRRX",jobTitles:"Home_jobTitles__D4aw0",about:"Home_about__2bjoL",topHolder:"Home_topHolder__3-d8M",list:"Home_list__3A6Ue",listContent:"Home_listContent__3GsVl",tidbit:"Home_tidbit__81wm_",content:"Home_content__3QmIh",projectContainer:"Home_projectContainer__gQmar",projectItem:"Home_projectItem__3fO9J",projectPage:"Home_projectPage__2HNsn",projectTitle:"Home_projectTitle__2H16P",richText:"Home_richText__sIrYu",backLink:"Home_backLink___v-mV",logo:"Home_logo__3GqVp",grid:"Home_grid__QT_Bm"}},130:function(e){e.exports={navContainer:"Nav_navContainer__2t1rR",navbar:"Nav_navbar__CigJE",navItem:"Nav_navItem__3yKpN",navInput:"Nav_navInput__6Tsxw","blink-color":"Nav_blink-color__230Ed",inputFormat:"Nav_inputFormat__2EFyY",carat:"Nav_carat__2L5Lr"}}},function(e){e.O(0,[774,184,888,179],(function(){return s=8324,e(e.s=s);var s}));var s=e.O();_N_E=s}]);