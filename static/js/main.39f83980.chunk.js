(this["webpackJsonpreact-hook-todo"]=this["webpackJsonpreact-hook-todo"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(6),c=o.n(r),i=(o(12),o(3)),l=o(4);o(13);function u(){return a.a.createElement("div",{className:"footer"},a.a.createElement("a",{href:"https://github.com/imkrantiprasad/react-hook-todo"},"GitHub link"))}function s(e){var t=e.todo,o=e.index,n=e.completeTodo,r=e.removeTodo;return a.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,a.a.createElement("div",null,a.a.createElement("button",{className:"btn mark-btn",onClick:function(){return n(o)}},t.isCompleted?"Unmark":"Mark"),a.a.createElement("button",{className:"btn delete-btn",onClick:function(){return r(o)}},"x")))}function m(e){var t=e.addTodo,o=Object(n.useState)(""),r=Object(l.a)(o,2),c=r[0],i=r[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&(t(c),i(""))}},a.a.createElement("input",{type:"text",className:"input",value:c,onChange:function(e){return i(e.target.value)}}))}var d=function(){var e=Object(n.useState)([{text:"Learn about React",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!1},{text:"Build really cool todo app",isCompleted:!1}]),t=Object(l.a)(e,2),o=t[0],r=t[1],c=function(e){var t=Object(i.a)(o);t[e].isCompleted=!t[e].isCompleted,r(t)},d=function(e){var t=Object(i.a)(o);t.splice(e,1),r(t)};return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"heading"},"Todo app by using React-Hooks."),a.a.createElement("div",{className:"todo-list"},o.map((function(e,t){return a.a.createElement(s,{key:t,index:t,todo:e,completeTodo:c,removeTodo:d})})),a.a.createElement(m,{addTodo:function(e){var t=[].concat(Object(i.a)(o),[{text:e}]);r(t)}})),a.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,o){e.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.39f83980.chunk.js.map