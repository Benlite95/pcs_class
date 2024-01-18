import './css/style.css';
import loadBlogList from './blogList';
import $ from 'jquery';

loadBlogList();

$('#homeLink').on('click', loadBlogList);
