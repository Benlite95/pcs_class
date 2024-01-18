import $ from 'jquery';
// import DOMPurify from 'dompurify';

// console.log(DOMPurify);

const subtitle = $('#subtitle');
const content = $('#content');

export default function setPage(page) {
  // subtitle.html(DOMPurify.sanitize(page.title));
  // content.html(DOMPurify.sanitize(page.content));
  subtitle.html(page.title);
  content.html(page.content);
}

/*
setPage({
  title: 'Test Page',
  content: 'Some test content'
});
*/
