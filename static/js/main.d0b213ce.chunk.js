(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(23),i=c.n(n),r=c(4),l=c(3),o=(c(53),c(6)),j=c(0),d=function(e){var t=function(){window.innerWidth<576&&document.querySelector(".link-wrapper").classList.toggle("visible")};return Object(j.jsxs)("nav",{children:[Object(j.jsxs)("div",{className:"link-wrapper",children:[Object(j.jsx)(r.c,{onClick:t,className:"nav-link",to:"/home",children:"Home"}),Object(j.jsx)(r.c,{onClick:t,className:"nav-link",to:"/about",children:"About"}),Object(j.jsx)(r.c,{onClick:t,className:"nav-link",to:"/projects",children:"Projects"}),Object(j.jsx)(r.c,{onClick:t,className:"nav-link",to:"/contact",children:"Contact"})]}),Object(j.jsx)(o.a,{icon:["fas","bars"],className:"nav-toggle",onClick:t})]})},p=c(11),u=c(43),h=function(){return Object(j.jsx)("header",{id:"home",className:"main-header fades",children:Object(j.jsxs)("div",{className:"banner",children:[Object(j.jsxs)("div",{className:"banner-text",children:[Object(j.jsxs)("h1",{children:["Hi, I'm ",Object(j.jsx)("span",{children:"Shaun van Ardenne"})]}),Object(j.jsx)("h1",{children:"I'm a full-stack web developer"})]}),Object(j.jsxs)(u.a,{className:"button",to:"#details",children:["See my work",Object(j.jsx)(o.a,{className:"banner-icon",icon:["fas","arrow-down"]})]})]})})},b=function(){return Object(j.jsxs)("section",{id:"details",className:"fades",children:[Object(j.jsxs)("div",{className:"details-wrapper select",children:[Object(j.jsxs)("div",{className:"detail",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(o.a,{className:"detail-icon",icon:["fas","code"]})}),Object(j.jsx)("h3",{children:"Clean"}),Object(j.jsx)("p",{children:"Legible code with good structure and comments."})]}),Object(j.jsxs)("div",{className:"detail",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(o.a,{className:"detail-icon",icon:["fas","mobile-alt"]})}),Object(j.jsx)("h3",{children:"Responsive"}),Object(j.jsx)("p",{children:"My focus is on layouts that present well on any device."})]}),Object(j.jsxs)("div",{className:"detail",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(o.a,{className:"detail-icon",icon:["fas","sitemap"]})}),Object(j.jsx)("h3",{children:"Intuitive"}),Object(j.jsx)("p",{children:"Dedicated to creating easy to use, effective UI/UX."})]}),Object(j.jsxs)("div",{className:"detail",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(o.a,{className:"detail-icon",icon:["fas","layer-group"]})}),Object(j.jsx)("h3",{children:"Full-Stack"}),Object(j.jsx)("p",{children:"Focused on React, Node, Express, and SQL"})]})]}),Object(j.jsx)(r.b,{className:"button details-link",to:"/about",children:"About Me"})]})},m=function(e){return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsxs)("div",{onClick:function(){return e.handleModal(e.project.id)},className:"carousel-link",to:"/projects",children:[Object(j.jsx)("div",{className:"carousel-card-title",children:Object(j.jsx)("h3",{children:e.project.projectTitle})}),Object(j.jsx)("div",{className:"carousel-card",children:Object(j.jsx)("img",{src:c(22)("./".concat(e.project.projectImage)).default,alt:e.project.projectTitle})})]})})},f=(c(78),c(44)),x=function(e){return Object(j.jsxs)("section",{id:"carousel",className:"fades",children:[Object(j.jsx)("h2",{className:"carousel-title",children:"Projects"}),Object(j.jsx)(f.Carousel,{showThumbs:!1,className:"carousel",children:e.projects.map((function(t,c){return Object(j.jsx)(m,{handleModal:e.handleModal,className:"carousel-slide",projects:e.projects,project:t},c)}))}),Object(j.jsx)(r.b,{className:"button",to:"/projects",children:"More Projects"})]})},O=function(e){var t=e.modalIndex,a=e.project,n=e.projects,i=e.handleClose,r=e.handleNext,l=e.handlePrevious;return Object(s.useEffect)((function(){document.getElementById("modal-window").style.opacity=1})),Object(j.jsx)("div",{id:"modal-window",style:{opacity:0},className:"modal-wrapper",children:Object(j.jsxs)("div",{className:"modal noselect",children:[Object(j.jsx)("div",{onClick:function(){return i()},className:"modal-close",children:Object(j.jsx)(o.a,{className:"modal-close-icon",icon:["fas","window-close"]})}),t>1?Object(j.jsx)("div",{onClick:function(){return l()},className:"modal-left-arrow",children:Object(j.jsx)(o.a,{className:"arrow-icon",icon:["fas","arrow-left"]})}):null,Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:a.projectTitle}),Object(j.jsx)("div",{className:"modal-details",children:Object(j.jsx)("p",{className:"select",children:a.projectText})}),Object(j.jsx)("img",{className:"modal-img",src:c(22)("./".concat(a.projectImage)).default})]}),t<n.length?Object(j.jsx)("div",{onClick:function(){return r()},className:"modal-right-arrow",children:Object(j.jsx)(o.a,{className:"arrow-icon",icon:["fas","arrow-right"]})}):null,Object(j.jsxs)("div",{className:"modal-buttons",children:[Object(j.jsx)("a",{className:"button",target:"_blank",href:a.projectLink,children:"Live Demo"}),Object(j.jsx)("a",{className:"button",target:"_blank",href:a.githubLink,children:"Github"})]})]})})},g=function(e){Object(s.useEffect)((function(){e.context.fade()}));var t=Object(s.useState)(e.context.projectData.slice(0,3)),c=Object(p.a)(t,2),n=c[0],i=(c[1],Object(s.useState)(!1)),r=Object(p.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)([]),u=Object(p.a)(d,2),m=u[0],f=u[1];return Object(j.jsxs)(a.a.Fragment,{children:[l?Object(j.jsx)(O,{handleClose:function(){!0===l&&o(!1)},handleNext:function(){m<n.length&&f(m+1)},handlePrevious:function(){m>1&&f(m-1)},projects:n,project:n[m-1],modalIndex:m}):null,Object(j.jsx)(h,{}),Object(j.jsx)(b,{}),Object(j.jsx)(x,{projects:n,handleModal:function(e){f(e),!1===l?o(!0):!0===l&&o(!1)}})]})},v=c.p+"static/media/Profile-pic-1.56af2aec.jpg",N=function(e){return Object(s.useEffect)((function(){e.context.fade()})),Object(j.jsx)("section",{id:"about",className:"main-content fades",style:{position:"relative"},children:Object(j.jsxs)("div",{className:"about",children:[Object(j.jsxs)("div",{className:"bio-wrapper",children:[Object(j.jsx)("img",{src:v,alt:"Picture of Shaun on white background"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"About Me"}),Object(j.jsxs)("p",{className:"select",children:["I'm a Full Stack Developer residing in Abbotsford, British Columbia. I strive to make clean, responsive, and intuitive websites and user interfaces while maitaining code which is easy to dive into!",Object(j.jsxs)(r.b,{to:"/projects",className:"bio-link",children:[" ","Check out my work"]})," ","or"," ",Object(j.jsxs)(r.b,{to:"/contact",className:"bio-link",children:["drop me a line"," "]}),"if you want to connect!"]})]})]}),Object(j.jsxs)("div",{className:"skills",children:[Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"CSS/SCSS"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"90%"}})}),Object(j.jsx)("span",{children:"90%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"HTML"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"90%"}})}),Object(j.jsx)("span",{children:"90%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"JavaScript"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"80%"}})}),Object(j.jsx)("span",{children:"80%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"React"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"80%"}})}),Object(j.jsx)("span",{children:"80%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"Node"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"70%"}})}),Object(j.jsx)("span",{children:"70%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"Express"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"70%"}})}),Object(j.jsx)("span",{children:"70%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"MongoDB"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"70%"}})}),Object(j.jsx)("span",{children:"70%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"SQL"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"60%"}})}),Object(j.jsx)("span",{children:"60%"})]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)("div",{className:"skill-title",children:"UX/UI"}),Object(j.jsx)("div",{className:"skill-percent",children:Object(j.jsx)("div",{className:"skill-percent-fill",style:{width:"40%"}})}),Object(j.jsx)("span",{children:"40%"})]})]})]})})},k=function(e){var t=e.project;return Object(j.jsxs)("div",{className:"card-wrapper",children:[Object(j.jsx)("img",{className:"project-img",src:c(22)("./".concat(t.projectImage)).default,alt:t.projectTitle}),Object(j.jsxs)("div",{className:"project-info",children:[Object(j.jsx)("h3",{className:"project-title",children:t.projectTitle}),Object(j.jsx)("div",{onClick:function(){return e.handleModal(t.id)},className:"button project-button",children:"More info"})]})]})},w=function(e){var t=Object(s.useState)(e.context.projectData),c=Object(p.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(p.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)([]),u=Object(p.a)(d,2),h=u[0],b=u[1],m=Object(s.useState)(1),f=Object(p.a)(m,2),x=f[0],g=f[1],v=Object(s.useState)(2),N=Object(p.a)(v,2),w=N[0],S=N[1],y=Object(s.useState)(Math.ceil(a.length/w)),C=Object(p.a)(y,2),T=C[0],L=C[1];Object(s.useEffect)((function(){window.innerWidth<768&&(S(2),L(Math.ceil(a.length/w))),window.innerWidth>=768&&(S(4),L(Math.ceil(a.length/w))),window.innerWidth>=1080&&(S(3),L(Math.ceil(a.length/w)))})),Object(s.useEffect)((function(){e.context.fade()}));var M=function(e){b(e),!1===l?o(!0):!0===l&&o(!1)},I=function(t){var c=document.querySelectorAll(".project-filter-item"),s=t.target;c.forEach((function(e){return e.classList.remove("project-filter-active")})),s.classList.add("project-filter-active");var a=t.target.textContent;if("All"===a)n(e.context.projectData),L(Math.ceil(e.context.projectData.length/w)),g(1);else{var i=e.context.projectData.filter((function(e){return e.projectTech.includes(a)}));n(i);for(var r=0;r<i.length;r++)i[r].id=r+1;L(Math.ceil(i.length/w)),g(1)}};function D(e){var t=Number(e.target.textContent);g(t)}return Object(j.jsxs)("section",{id:"projects",className:"main-content projects fades",children:[Object(j.jsx)("h2",{className:"projects-title",children:"Projects"}),l?Object(j.jsx)(O,{handleClose:function(){!0===l&&o(!1)},handleNext:function(){h<a.length&&b(h+1)},handlePrevious:function(){h>1&&b(h-1)},projects:a,project:a[h-1],modalIndex:h}):null,Object(j.jsxs)("ul",{className:"project-filter-nav",children:[Object(j.jsx)("li",{onClick:function(e){return I(e)},className:"project-filter-item project-filter-active",children:"All"}),Object(j.jsx)("li",{onClick:function(e){return I(e)},className:"project-filter-item",children:"JavaScript"}),Object(j.jsx)("li",{onClick:function(e){return I(e)},className:"project-filter-item",children:"React"}),Object(j.jsx)("li",{onClick:function(e){return I(e)},className:"project-filter-item",children:"Node"})]}),Object(j.jsx)("div",{className:"projects-wrapper main-content",children:function(e){var t=x*w-w,c=t+w;return e.slice(t,c)}(a).map((function(e,t){return Object(j.jsx)(k,{projects:a,project:e,handleModal:M},t)}))}),Object(j.jsxs)("div",{className:"pagination",children:[Object(j.jsx)("button",{onClick:function(){x>1&&g((function(e){return e-1}))},className:"prev ".concat(1===x?"disabled":""),children:"prev"}),function(){var e=Math.floor((x-1)/T)*T;return new Array(T).fill().map((function(t,c){return e+c+1}))}().map((function(e,t){return Object(j.jsx)("button",{onClick:D,className:"pagination-item ".concat(x===e?"page-active":null),children:Object(j.jsx)("span",{children:e})},t)})),Object(j.jsx)("button",{onClick:function(){x<T&&g((function(e){return e+1}))},className:"next ".concat(x===T?"disabled":""),children:"next"})]})]})},S=c(19),y=c(14),C=c(15),T=c(17),L=c(16),M=c(45),I=c.n(M),D=c(46),A=c.n(D),P=function(e){Object(T.a)(c,e);var t=Object(L.a)(c);function c(){var e;Object(y.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={submitState:"Submit",submitMessage:"",errors:!1,name:"",email:"",message:""},e.handleChange=function(t){var c=t.target.name,s=t.target.value;e.setState(Object(S.a)({},c,s))},e.handleSubmit=function(t){t.preventDefault();var c={name:e.state.name,email:e.state.email,message:e.state.message};c.name&&c.email&&c.message?(e.setState({errors:!1}),e.setState({submitState:"Sending..."}),I.a.post(A.a,c).then((function(t){"success"===t.data.status?(e.setState({submitState:"Submit"}),e.setState({submitMessage:"Message sent."}),e.setState({name:"",email:"",subject:"",message:""})):"fail"===t.data.status&&(e.setState({submitState:"Submit"}),e.setState({submitMessage:"Message failed to send."}))}))):e.setState({errors:!0})},e}return Object(C.a)(c,[{key:"componentDidMount",value:function(){this.props.context.fade()}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("section",{id:"contact",className:"main-content contact-wrapper fades",children:[Object(j.jsx)("h2",{className:"contact-title",children:"Contact"}),Object(j.jsx)("div",{className:"form-wrapper",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"contact-form",children:[Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.name,type:"text",name:"name",placeholder:"Name"}),Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"email",name:"email",placeholder:"Enter Email"}),Object(j.jsx)("textarea",{onChange:this.handleChange,value:this.state.message,type:"text",name:"message",placeholder:"Your Message"}),Object(j.jsx)("button",{type:"submit",className:"button form-button",children:this.state.submitState}),!0===this.state.errors?Object(j.jsx)("span",{className:"form-error",children:"Please fill out all fields"}):null]})}),""!==this.state.submitMessage?Object(j.jsx)("div",{className:"modal-wrapper",children:Object(j.jsx)("div",{className:"contact-modal",children:Object(j.jsxs)("div",{className:"message-status",children:[Object(j.jsx)("span",{children:this.state.submitMessage}),Object(j.jsx)("button",{onClick:function(){return e.setState({submitMessage:""})},className:"button contact-modal-button",children:"Close"})]})})}):null]})}}]),c}(s.Component),J=function(){return Object(j.jsxs)("footer",{id:"footer",children:[Object(j.jsx)("div",{onClick:function(){window.scrollTo(0,0)},className:"top-link",children:Object(j.jsx)(o.a,{size:"lg",icon:["fas","angle-double-up"]})}),Object(j.jsxs)("div",{className:"footer-links",children:[Object(j.jsx)("a",{className:"footer-icon-wrapper",href:"https://github.com/svanardenne",target:"_blank",children:Object(j.jsxs)("svg",{className:"icon-footer",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("title",{children:"GitHub"}),Object(j.jsx)("path",{fill:"#FFF",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),Object(j.jsx)("a",{className:"footer-icon-wrapper",href:"https://www.linkedin.com/in/shaun-van-ardenne/",target:"_blank",children:Object(j.jsxs)("svg",{className:"icon-footer",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("title",{children:"LinkedIn"}),Object(j.jsx)("path",{fill:"#FFF",d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]})})]}),Object(j.jsxs)("div",{className:"footer-name",children:["Shaun van Ardenne ",Object(j.jsx)("span",{className:"copyright",children:"\xa92021"})]})]})},R=function(e){Object(T.a)(c,e);var t=Object(L.a)(c);function c(){return Object(y.a)(this,c),t.apply(this,arguments)}return Object(C.a)(c,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),c}(s.Component),E=Object(l.g)(R),H=c(26),F=[{id:1,githubLink:"https://github.com/svanardenne/mern-stack-ecommerce-app-front",projectLink:"https://unruffled-joliot-9df407.netlify.app/",projectTitle:"Full Stack eCommerce Site",projectImage:"ecommerce-app.png",projectText:"This project is a demonstration of a full stack eCommerce app using React on the front end, node/express on the back end, and MongoDB for database.",projectTech:["React","Node","Express","Mongoose","MongoDB","JavaScript"]},{id:2,githubLink:"https://github.com/svanardenne/full-stack-course-app",projectLink:"/full-stack-course-app/",projectTitle:"Full-Stack Course Management App",projectImage:"full-stack-course-app.png",projectText:"This project is a demonstration of a full stack CRUD app using React on the front end, node/express on the back end, and an sqlite database.",projectTech:["React","Node","Express","Sequelize","SQLite","JavaScript"]},{id:3,githubLink:"https://github.com/svanardenne/Library-CRUD-application",projectLink:"https://stormy-waters-08943.herokuapp.com/",projectTitle:"Library CRUD Application",projectImage:"library-crud-application.png",projectText:"A CRUD application for libraries. The user can view, add, update, or remove items from a library database.",projectTech:["Node","Express","Pug","Sequelize","SQLite","JavaScript"]},{id:4,githubLink:"https://github.com/svanardenne/elder-gods-brewing",projectLink:"/elder-gods-brewing/",projectTitle:"React.js Landing Page",projectImage:"elder-gods-landing.png",projectText:"Landing page created with React.js and Bootstrap",projectTech:["React","Bootstrap","JavaScript"]},{id:5,githubLink:"https://github.com/svanardenne/Random-User-API-client",projectLink:"/Random-User-API-client/",projectTitle:"Employee Directory",projectImage:"employee-directory.png",projectText:"An employee directory with information generated randomly from randomuser.me using the Fetch API",projectTech:["JavaScript","HTML","CSS"]},{id:6,githubLink:"https://github.com/svanardenne/Phrase-Hunter",projectLink:"/Phrase-Hunter/",projectTitle:"Phrase Hunter",projectImage:"fs-project-4.png",projectText:"Word guessing game created using JavaScript classes",projectTech:["JavaScript","HTML","CSS"]},{id:7,githubLink:"https://github.com/svanardenne/student-directory",projectLink:"/student-directory/",projectTitle:"Student Directory",projectImage:"fs-project-2.png",projectText:"A student directory using data pagination and filtering techniques",projectTech:["JavaScript","HTML","CSS"]},{id:8,githubLink:"https://github.com/svanardenne/web-dashboard",projectLink:"/web-dashboard/",projectTitle:"Dashboard",projectImage:"project-7.png",projectText:"A dashboard designed with focus on CSS grid, CSS flexbox, Chart.js, and overall Javascript interactivity.",projectTech:["JavaScript","Chart.js","HTML","CSS"]},{id:9,githubLink:"https://github.com/svanardenne/lightbox-photo-gallery",projectLink:"/lightbox-photo-gallery/",projectTitle:"Interactive Photo Gallery",projectImage:"project-5.png",projectText:"An interactive photo gallery utilizing Jquery, Sass, and a Lightbox plugin",projectTech:["JavaScript","JQuery","Lightbox.js","Sass","HTML"]},{id:10,githubLink:"https://github.com/svanardenne/random-quote-generator",projectLink:"/random-quote-generator/",projectTitle:"Random Quote Generator",projectImage:"fs-project-1.png",projectText:"A random quote generator using arrays, object literals; complete with timer",projectTech:["JavaScript","HTML","CSS"]},{id:11,githubLink:"https://github.com/svanardenne/online-registration-form",projectLink:"/online-registration-form/",projectTitle:"Online Registration Form",projectImage:"fullstack-project-3.png",projectText:"A responsive form using JavaScript validation",projectTech:["JavaScript","HTML","CSS"]}],U=a.a.createContext(),q=function(e){Object(T.a)(c,e);var t=Object(L.a)(c);function c(){var e;return Object(y.a)(this,c),(e=t.call(this)).ProjectData=F,e}return Object(C.a)(c,[{key:"render",value:function(){var e={projectData:this.ProjectData,fade:function(){var e=document.querySelectorAll(".fades");function t(){for(var t=0;t<e.length;t++){var c=e[t];c.getBoundingClientRect().top-window.innerHeight+50<0?c.classList.add("inView"):c.classList.remove("inView")}}window.addEventListener("scroll",t),t()}};return Object(j.jsx)(U.Provider,{value:e,children:this.props.children})}}]),c}(s.Component);U.Consumer;function B(e){return function(t){return Object(j.jsx)(U.Consumer,{children:function(c){return Object(j.jsx)(e,Object(H.a)(Object(H.a)({},t),{},{context:c}))}})}}var z=c(12),Q=c(47),_=c(48);z.b.add(Q.a,_.a);var V=B(g),W=B(N),G=B(w),X=B(P);var Y=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)(E,{children:Object(j.jsxs)("div",{className:"App noselect",children:[Object(j.jsx)(d,{}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",to:"/home"}),Object(j.jsx)(l.b,{path:"/home",component:V}),Object(j.jsx)(l.b,{path:"/about",component:W}),Object(j.jsx)(l.b,{path:"/projects",component:G}),Object(j.jsx)(l.b,{path:"/contact",component:X})]}),Object(j.jsx)(J,{})]})})})};i.a.render(Object(j.jsx)(q,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))},22:function(e,t,c){var s={"./ecommerce-app.png":61,"./elder-gods-landing.png":62,"./employee-directory.png":63,"./fs-project-1.png":64,"./fs-project-2.png":65,"./fs-project-4.png":66,"./full-stack-course-app.png":67,"./fullstack-project-3.png":68,"./library-crud-application.png":69,"./project-1.png":70,"./project-2.png":71,"./project-3.png":72,"./project-4.png":73,"./project-5.png":74,"./project-6.png":75,"./project-7.png":76,"./project-8.png":77};function a(e){var t=n(e);return c(t)}function n(e){if(!c.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id=22},46:function(e,t){e.exports="https://quiet-sierra-61453.herokuapp.com/"},53:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/ecommerce-app.850c46a4.png"},62:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/elder-gods-landing.3acec472.png"},63:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/employee-directory.86520974.png"},64:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/fs-project-1.efec1659.png"},65:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/fs-project-2.c4263a17.png"},66:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/fs-project-4.5beb78af.png"},67:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/full-stack-course-app.f8cb2883.png"},68:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/fullstack-project-3.b9331ce4.png"},69:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/library-crud-application.41b3f69b.png"},70:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-1.71151b6f.png"},71:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-2.5384f96e.png"},72:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-3.f94e002b.png"},73:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-4.e6c78e29.png"},74:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-5.1b11304a.png"},75:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-6.821472fa.png"},76:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-7.dc8c55d8.png"},77:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/project-8.29fcabaf.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.d0b213ce.chunk.js.map