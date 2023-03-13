const heading = React.createElement("h1", {
    id: "title"
}, "heading 1");
const heading2 = React.createElement("h1", {
    id: "title"
}, "heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); // //    <script>
 // //     // const heading=React.createElement("h1",{},"hello");
 // //     // 
 // //     // root.render(heading);
 // //     const heading1=React.createElement(
 // //         "h1",
 // //         {
 // //             id:"title"
 // //         },
 // //         "heading 1"
 // //     );
 // //     const heading2=React.createElement(
 // //         "h1",
 // //         {
 // //             id:"title"
 // //         },
 // //         "heading 2"
 // //     );
 // //     const container=React.createElement(
 // //         "div",
 // //         {
 // //             id:"container"
 // //         },
 // //         [heading1,heading2]
 // //     );
 // //     root.render(heading);
 // <!-- </script> -->

//# sourceMappingURL=index.6bd02f5a.js.map
