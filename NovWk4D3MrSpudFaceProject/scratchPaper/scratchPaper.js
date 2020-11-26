window.addEventListener("DOMContentLoaded", event => {
    document
    .getElementById('my-list')
    .addEventListener('click', e => {
      // will print out "This is list item X"
      // depending on which list item is clicked
      console.log(e.target.innerHTML);

      // always prints "my-list"
      console.log(e.currentTarget.id);
    });
});
