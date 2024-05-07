import{_ as e,c as l,o as r,a}from"./app.117ae039.js";const b=JSON.parse('{"title":"\u8868\u5355\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue Formulate","slug":"vue-formulate"},{"level":2,"title":"VeeValidate 4","slug":"veevalidate-4"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-1"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-1"},{"level":2,"title":"vue-final-form","slug":"vue-final-form"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-2"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-2"},{"level":2,"title":"v-select","slug":"v-select"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-3"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-3"},{"level":2,"title":"Vue Formily","slug":"vue-formily"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-4"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-4"},{"level":2,"title":"vue-form-generator","slug":"vue-form-generator"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-5"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-5"},{"level":2,"title":"Vue Form Wizard","slug":"vue-form-wizard"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-6"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-6"},{"level":2,"title":"Vue JSON Schema Form","slug":"vue-json-schema-form"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-7"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-7"},{"level":2,"title":"Vue FormBuilder","slug":"vue-formbuilder"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-8"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-8"},{"level":2,"title":"Vue Formulate","slug":"vue-formulate-1"},{"level":3,"title":"\u8D44\u6E90\u5730\u5740","slug":"\u8D44\u6E90\u5730\u5740-9"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9-9"}],"relativePath":"platform/mobile/form.md"}'),i={name:"platform/mobile/form.md"},t=a('<h1 id="\u8868\u5355\u7EC4\u4EF6" tabindex="-1">\u8868\u5355\u7EC4\u4EF6 <a class="header-anchor" href="#\u8868\u5355\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>Vue3\u8868\u5355\u7EC4\u4EF6\u662F\u57FA\u4E8EVue.js 3.0\u5F00\u53D1\u7684\u53EF\u4EE5\u7528\u4E8E\u6784\u5EFA\u5404\u79CD\u8F93\u5165\u8868\u5355\u7684\u7EC4\u4EF6\uFF0C\u5305\u62EC\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u3001\u65E5\u671F\u9009\u62E9\u548C\u6587\u4EF6\u4E0A\u4F20\u7B49\u8868\u5355\u5143\u7D20\u3002\u5B83\u63D0\u4F9B\u5F3A\u5927\u7684\u6570\u636E\u7ED1\u5B9A\u548C\u9A8C\u8BC1\u673A\u5236\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u4E0EVue3\u6570\u636E\u7ED1\u5B9A\u7ED3\u5408\u4F7F\u7528\u3002Vue3\u8868\u5355\u7EC4\u4EF6\u7684\u4F7F\u7528\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u9875\u9762\u4E2D\u5F15\u5165\u76F8\u5173\u7EC4\u4EF6\uFF0C\u5E76\u7F16\u5199\u5BF9\u5E94\u7684\u6570\u636E\u7ED1\u5B9A\u548C\u4E8B\u4EF6\u5904\u7406\uFF0C\u5373\u53EF\u5FEB\u901F\u642D\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u8868\u5355\u754C\u9762</p><h2 id="vue-formulate" tabindex="-1">Vue Formulate <a class="header-anchor" href="#vue-formulate" aria-hidden="true">#</a></h2><p>Vue Formulate\u662F\u4E00\u4E2A\u7075\u6D3B\u7684\u8868\u5355\u7EC4\u4EF6\u5E93\uFF0C\u53EF\u6EE1\u8DB3\u5404\u79CD\u8868\u5355\u9700\u6C42\u3002\u5B83\u652F\u6301\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\uFF0C\u5305\u62EC\u6587\u672C\u6846\u3001\u4E0B\u62C9\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u7B49\uFF0C\u5E76\u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u3002\u6B64\u5916\uFF0C\u5B83\u8FD8\u652F\u6301\u591A\u8BED\u8A00\u548C\u56FD\u9645\u5316\u3001\u8868\u5355\u6821\u9A8C\u548C\u5F02\u6B65\u9A8C\u8BC1\u7B49\u529F\u80FD\u3002 Vue Formulate\u4F7F\u7528\u7B80\u5355\uFF0C\u53EF\u4EE5\u5FEB\u901F\u96C6\u6210\u5230\u9879\u76EE\u4E2D\u3002\u540C\u65F6\uFF0C\u5B83\u5F97\u5230\u53CA\u65F6\u66F4\u65B0\uFF0C\u652F\u6301Vue 3.x\u7248\u672C\u3002</p><p><img src="https://img.shields.io/github/stars/wearebraid/vue-formulate?style=social" alt="GitHub stars"></p><h4 id="\u8D44\u6E90\u5730\u5740" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740" aria-hidden="true">#</a></h4><ul><li><a href="https://github.com/wearebraid/vue-formulate" target="_blank" rel="noopener noreferrer">GitHub\u5730\u5740</a></li><li><a href="https://vueformulate.com/" target="_blank" rel="noopener noreferrer">\u6587\u6863\u5730\u5740</a></li></ul><h4 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h4><ul><li>\u7075\u6D3B\u7684\u8868\u5355\u7EC4\u4EF6\u5E93\uFF0C\u652F\u6301\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B</li><li>\u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B</li><li>\u652F\u6301\u591A\u8BED\u8A00\u548C\u56FD\u9645\u5316</li><li>\u652F\u6301\u8868\u5355\u6821\u9A8C\u548C\u5F02\u6B65\u9A8C\u8BC1</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u5FEB\u901F\u96C6\u6210\u5230\u9879\u76EE\u4E2D</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A</li><li>\u652F\u6301\u670D\u52A1\u5668\u7AEF\u6E32\u67D3</li></ul><h2 id="veevalidate-4" tabindex="-1">VeeValidate 4 <a class="header-anchor" href="#veevalidate-4" aria-hidden="true">#</a></h2><p>VeeValidate 4 \u662F\u4E00\u4E2A\u7B80\u5355\u6613\u7528\u3001\u7075\u6D3B\u7684\u8868\u5355\u9A8C\u8BC1\u5E93\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5BF9\u8868\u5355\u8FDB\u884C\u9A8C\u8BC1\u3002\u5B83\u652F\u6301\u591A\u79CD\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5305\u62EC\u5FC5\u586B\u3001\u683C\u5F0F\u9A8C\u8BC1\u3001\u957F\u5EA6\u9A8C\u8BC1\u7B49\uFF0C\u5E76\u652F\u6301\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u3002\u6B64\u5916\uFF0C\u5B83\u8FD8\u652F\u6301\u56FD\u9645\u5316\u3001\u5F02\u6B65\u9A8C\u8BC1\u3001\u9A8C\u8BC1\u6D88\u606F\u5B9A\u5236\u548C\u591A\u89E6\u53D1\u65B9\u5F0F\u7B49\u529F\u80FD\u3002VeeValidate 4 \u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u4E0E\u591A\u79CD\u524D\u7AEF\u6846\u67B6\u8FDB\u884C\u96C6\u6210\uFF0C\u5982 Vue\u3001React\u3001Angular \u7B49\u3002</p><p><img src="https://img.shields.io/github/stars/logaretm/vee-validate?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-1" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-1" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/logaretm/vee-validate" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://vee-validate.logaretm.com/v4/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u7F51\u7AD9</a></li></ul><h3 id="\u7279\u70B9-1" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-1" aria-hidden="true">#</a></h3><ul><li>\u7B80\u5355\u6613\u7528\u3001\u7075\u6D3B\u7684\u8868\u5355\u9A8C\u8BC1\u5E93\u3002</li><li>\u652F\u6301\u591A\u79CD\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5305\u62EC\u5FC5\u586B\u3001\u683C\u5F0F\u9A8C\u8BC1\u3001\u957F\u5EA6\u9A8C\u8BC1\u7B49\u3002</li><li>\u652F\u6301\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5E76\u4E14\u53EF\u4EE5\u91CD\u7528\u3002</li><li>\u652F\u6301\u56FD\u9645\u5316\u3001\u5F02\u6B65\u9A8C\u8BC1\u3001\u9A8C\u8BC1\u6D88\u606F\u5B9A\u5236\u548C\u591A\u89E6\u53D1\u65B9\u5F0F\u7B49\u529F\u80FD\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u4E0E\u591A\u79CD\u524D\u7AEF\u6846\u67B6\u8FDB\u884C\u96C6\u6210\uFF0C\u5982 Vue\u3001React\u3001Angular \u7B49\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul><h2 id="vue-final-form" tabindex="-1">vue-final-form <a class="header-anchor" href="#vue-final-form" aria-hidden="true">#</a></h2><p>vue-final-form \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u7BA1\u7406\u5E93\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u7BA1\u7406\u8868\u5355\u72B6\u6001\u548C\u8868\u5355\u6570\u636E\u3002\u5B83\u652F\u6301\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\uFF0C\u5305\u62EC\u6587\u672C\u6846\u3001\u4E0B\u62C9\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u7B49\uFF0C\u5E76\u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u3002\u6B64\u5916\uFF0C\u5B83\u8FD8\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u5F02\u6B65\u9A8C\u8BC1\u7B49\u529F\u80FD\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5B9E\u73B0\u8868\u5355\u7684\u6821\u9A8C\u3002vue-final-form \u5BF9\u539F\u59CB\u8868\u5355\u6570\u636E\u8FDB\u884C\u4E86\u62F7\u8D1D\uFF0C\u5B9E\u73B0\u4E86\u201C\u4E0D\u53D8\u6027\u201D\uFF0C\u8FD9\u53EF\u4EE5\u4F7F\u8868\u5355\u72B6\u6001\u7BA1\u7406\u66F4\u52A0\u7B80\u5355\u3002vue-final-form \u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u4E0E Vue.js \u7D27\u5BC6\u96C6\u6210\u3002</p><p><img src="https://img.shields.io/github/stars/vue-final-form/vue-final-form?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-2" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-2" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/vue-final-form/vue-final-form" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://vue-final-form.org/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-2" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-2" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u7BA1\u7406\u5E93\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u7BA1\u7406\u8868\u5355\u72B6\u6001\u548C\u8868\u5355\u6570\u636E\u3002</li><li>\u652F\u6301\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\uFF0C\u5305\u62EC\u6587\u672C\u6846\u3001\u4E0B\u62C9\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u7B49\u3002</li><li>\u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u3002</li><li>\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u5F02\u6B65\u9A8C\u8BC1\u7B49\u529F\u80FD\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5B9E\u73B0\u8868\u5355\u7684\u6821\u9A8C\u3002</li><li>\u5B9E\u73B0\u4E86\u8868\u5355\u6570\u636E\u7684\u201C\u4E0D\u53D8\u6027\u201D\uFF0C\u53EF\u4EE5\u4F7F\u8868\u5355\u72B6\u6001\u7BA1\u7406\u66F4\u52A0\u7B80\u5355\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u4E0E Vue.js \u7D27\u5BC6\u96C6\u6210\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li></ul><h2 id="v-select" tabindex="-1">v-select <a class="header-anchor" href="#v-select" aria-hidden="true">#</a></h2><p>v-select \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u4E0B\u62C9\u9009\u62E9\u6846\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u591A\u79CD\u4E0B\u62C9\u9009\u62E9\u6846\u7684UI\u6837\u5F0F\u548C\u529F\u80FD\u3002\u901A\u8FC7 v-select \u7EC4\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u65B9\u4FBF\u5730\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u9009\u9879\uFF0C\u5E76\u4E14\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u5C55\u793A\u6837\u5F0F\u548C\u7B5B\u9009\u89C4\u5219\u7B49\u3002v-select \u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u548C\u8FDC\u7A0B\u641C\u7D22\u7B49\u529F\u80FD\uFF0C\u5E76\u4E14\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</p><p><img src="https://img.shields.io/github/stars/sagalbot/vue-select?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-3" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-3" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/sagalbot/vue-select" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://vue-select.org/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-3" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-3" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u7684\u4E0B\u62C9\u9009\u62E9\u6846\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u591A\u79CD\u4E0B\u62C9\u9009\u62E9\u6846\u7684UI\u6837\u5F0F\u548C\u529F\u80FD\u3002</li><li>\u652F\u6301\u5355\u9009\u548C\u591A\u9009\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u5C55\u793A\u6837\u5F0F\u548C\u7B5B\u9009\u89C4\u5219\u7B49\u3002</li><li>\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u548C\u8FDC\u7A0B\u641C\u7D22\u7B49\u529F\u80FD\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</li><li>\u652F\u6301\u81EA\u5B9A\u4E49\u9009\u9879\u6A21\u677F\u548C\u9009\u9879\u52A0\u8F7D\u63D0\u793A\u7B49\u529F\u80FD\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul><h2 id="vue-formily" tabindex="-1">Vue Formily <a class="header-anchor" href="#vue-formily" aria-hidden="true">#</a></h2><p>Vue Formily \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u7BA1\u7406\u6846\u67B6\uFF0C\u5B83\u7B80\u5316\u4E86\u8868\u5355\u7684\u5F00\u53D1\u548C\u7BA1\u7406\u6D41\u7A0B\uFF0C\u63D0\u4F9B\u4E86\u53EF\u6269\u5C55\u7684\u8868\u5355\u7EC4\u4EF6\u548C\u8868\u5355\u6570\u636E\u7BA1\u7406\u5DE5\u5177\u3002Vue Formily \u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u3001\u8868\u5355\u6821\u9A8C\u3001\u8868\u5355\u8054\u52A8\u3001\u8868\u5355\u6570\u636E\u7ED1\u5B9A\u7B49\u529F\u80FD\uFF0C\u5E76\u4E14\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002Vue Formily \u8FD8\u652F\u6301 JSON Schema\uFF0C\u53EF\u4EE5\u6839\u636E JSON Schema \u81EA\u52A8\u751F\u6210\u8868\u5355\u3002</p><p><img src="https://img.shields.io/github/stars/alibaba/formily?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-4" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-4" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/alibaba/formily" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://formilyjs.org/#/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-4" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-4" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u7BA1\u7406\u6846\u67B6\uFF0C\u7B80\u5316\u4E86\u8868\u5355\u7684\u5F00\u53D1\u548C\u7BA1\u7406\u6D41\u7A0B\u3002</li><li>\u63D0\u4F9B\u53EF\u6269\u5C55\u7684\u8868\u5355\u7EC4\u4EF6\u548C\u8868\u5355\u6570\u636E\u7BA1\u7406\u5DE5\u5177\u3002</li><li>\u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u3001\u8868\u5355\u6821\u9A8C\u3001\u8868\u5355\u8054\u52A8\u3001\u8868\u5355\u6570\u636E\u7ED1\u5B9A\u7B49\u529F\u80FD\u3002</li><li>\u652F\u6301 JSON Schema\uFF0C\u53EF\u4EE5\u6839\u636E JSON Schema \u81EA\u52A8\u751F\u6210\u8868\u5355\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul><h2 id="vue-form-generator" tabindex="-1">vue-form-generator <a class="header-anchor" href="#vue-form-generator" aria-hidden="true">#</a></h2><p>vue-form-generator \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5730\u751F\u6210\u8868\u5355\uFF0C\u800C\u65E0\u9700\u624B\u52A8\u7F16\u5199 HTML \u53CA\u76F8\u5173\u8868\u5355\u903B\u8F91\u4EE3\u7801\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u3001\u8868\u5355\u8054\u52A8\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u5E76\u4E14\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002vue-form-generator \u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u51CF\u5C11\u5DE5\u4F5C\u91CF\u3002</p><p><img src="https://img.shields.io/github/stars/icebob/vue-form-generator?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-5" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-5" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/icebob/vue-form-generator" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://icebob.github.io/vue-form-generator/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-5" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-5" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5730\u751F\u6210\u8868\u5355\u3002</li><li>\u63D0\u4F9B\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u3001\u8868\u5355\u8054\u52A8\u7B49\u5E38\u7528\u529F\u80FD\u3002</li><li>\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002</li><li>\u652F\u6301\u52A8\u6001\u8868\u5355\u548C\u591A\u7EA7\u8868\u5355\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul><h2 id="vue-form-wizard" tabindex="-1">Vue Form Wizard <a class="header-anchor" href="#vue-form-wizard" aria-hidden="true">#</a></h2><p>Vue Form Wizard \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u591A\u6B65\u9AA4\u8868\u5355\u7EC4\u4EF6\u5E93\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u6784\u5EFA\u590D\u6742\u7684\u591A\u6B65\u9AA4\u8868\u5355\u3002\u5B83\u4F7F\u7528\u7B80\u5355\uFF0C\u53EF\u81EA\u5B9A\u4E49\uFF0C\u63D0\u4F9B\u4E86\u591A\u79CD\u6837\u5F0F\u548C\u529F\u80FD\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u8868\u5355\u6570\u636E\u7BA1\u7406\u7B49\u5E38\u7528\u529F\u80FD\u3002Vue Form Wizard \u8FD8\u652F\u6301\u52A8\u6001\u8868\u5355\u5B57\u6BB5\u548C\u8868\u5355\u8054\u52A8\u7B49\u9AD8\u7EA7\u529F\u80FD\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5E94\u7528\u4E8E\u5404\u79CD\u5E94\u7528\u573A\u666F\u3002</p><p><img src="https://img.shields.io/github/stars/cristijora/vue-form-wizard?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-6" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-6" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/cristijora/vue-form-wizard" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://cristijora.github.io/vue-form-wizard/#/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-6" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-6" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u7684\u591A\u6B65\u9AA4\u8868\u5355\u7EC4\u4EF6\u5E93\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u6784\u5EFA\u590D\u6742\u7684\u591A\u6B65\u9AA4\u8868\u5355\u3002</li><li>\u4F7F\u7528\u7B80\u5355\uFF0C\u53EF\u81EA\u5B9A\u4E49\uFF0C\u63D0\u4F9B\u4E86\u591A\u79CD\u6837\u5F0F\u548C\u529F\u80FD\u3002</li><li>\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u8868\u5355\u6570\u636E\u7BA1\u7406\u7B49\u5E38\u7528\u529F\u80FD\u3002</li><li>\u652F\u6301\u52A8\u6001\u8868\u5355\u5B57\u6BB5\u548C\u8868\u5355\u8054\u52A8\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul><h2 id="vue-json-schema-form" tabindex="-1">Vue JSON Schema Form <a class="header-anchor" href="#vue-json-schema-form" aria-hidden="true">#</a></h2><p>Vue JSON Schema Form \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u548C JSON Schema \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u6839\u636E JSON Schema \u81EA\u52A8\u751F\u6210\u8868\u5355\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u8868\u5355\u8054\u52A8\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u5E76\u4E14\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002Vue JSON Schema Form \u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u51CF\u5C11\u5DE5\u4F5C\u91CF\u3002</p><p><img src="https://img.shields.io/github/stars/lljj-x/vue-json-schema-form?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-7" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-7" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/lljj-x/vue-json-schema-form" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://github.com/lljj-x/vue-json-schema-form#readme" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-7" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-7" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u548C JSON Schema \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u6839\u636E JSON Schema \u81EA\u52A8\u751F\u6210\u8868\u5355\u3002</li><li>\u63D0\u4F9B\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u8868\u5355\u8054\u52A8\u7B49\u5E38\u7528\u529F\u80FD\u3002</li><li>\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002</li><li>\u652F\u6301\u591A\u8BED\u8A00\u548C\u52A8\u6001\u8868\u5355\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul><h2 id="vue-formbuilder" tabindex="-1">Vue FormBuilder <a class="header-anchor" href="#vue-formbuilder" aria-hidden="true">#</a></h2><p>Vue FormBuilder \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5730\u751F\u6210\u8868\u5355\uFF0C\u800C\u65E0\u9700\u624B\u52A8\u7F16\u5199 HTML \u53CA\u76F8\u5173\u8868\u5355\u903B\u8F91\u4EE3\u7801\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u3001\u8868\u5355\u8054\u52A8\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u5E76\u4E14\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002Vue FormBuilder \u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u51CF\u5C11\u5DE5\u4F5C\u91CF\u3002</p><p><img src="https://img.shields.io/github/stars/mrabit/vue-formbuilder?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-8" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-8" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/mrabit/vue-formbuilder" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://github.com/mrabit/vue-formbuilder#readme" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-8" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-8" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5730\u751F\u6210\u8868\u5355\u3002</li><li>\u63D0\u4F9B\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u3001\u8868\u5355\u8054\u52A8\u7B49\u5E38\u7528\u529F\u80FD\u3002</li><li>\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002</li><li>\u652F\u6301\u591A\u8BED\u8A00\u548C\u52A8\u6001\u8868\u5355\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul><h2 id="vue-formulate-1" tabindex="-1">Vue Formulate <a class="header-anchor" href="#vue-formulate-1" aria-hidden="true">#</a></h2><p>Vue Formulate \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u6784\u5EFA\u590D\u6742\u7684\u8868\u5355\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u8868\u5355\u6570\u636E\u7BA1\u7406\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u5E76\u4E14\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002Vue Formulate \u8FD8\u652F\u6301\u8868\u5355\u8054\u52A8\u3001\u52A8\u6001\u8868\u5355\u5B57\u6BB5\u548C\u5F02\u6B65\u6570\u636E\u52A0\u8F7D\u7B49\u9AD8\u7EA7\u529F\u80FD\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5E94\u7528\u4E8E\u5404\u79CD\u5E94\u7528\u573A\u666F\u3002</p><p><img src="https://img.shields.io/github/stars/wearebraid/vue-formulate?style=social" alt="GitHub stars"></p><h3 id="\u8D44\u6E90\u5730\u5740-9" tabindex="-1">\u8D44\u6E90\u5730\u5740 <a class="header-anchor" href="#\u8D44\u6E90\u5730\u5740-9" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/wearebraid/vue-formulate" target="_blank" rel="noopener noreferrer">GitHub \u5730\u5740</a></li><li><a href="https://vueformulate.com" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h3 id="\u7279\u70B9-9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9-9" aria-hidden="true">#</a></h3><ul><li>\u57FA\u4E8E Vue.js \u7684\u8868\u5355\u751F\u6210\u5668\u5E93\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u6784\u5EFA\u590D\u6742\u7684\u8868\u5355\u3002</li><li>\u63D0\u4F9B\u591A\u79CD\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C UI \u6837\u5F0F\uFF0C\u652F\u6301\u8868\u5355\u9A8C\u8BC1\u548C\u8868\u5355\u6570\u636E\u7BA1\u7406\u7B49\u5E38\u7528\u529F\u80FD\u3002</li><li>\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u8868\u5355\u5B57\u6BB5\u7C7B\u578B\u548C\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u3002</li><li>\u652F\u6301\u8868\u5355\u8054\u52A8\u3001\u52A8\u6001\u8868\u5355\u5B57\u6BB5\u548C\u5F02\u6B65\u6570\u636E\u52A0\u8F7D\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</li><li>\u6613\u4E8E\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230 Vue.js \u9879\u76EE\u4E2D\u3002</li><li>\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u6863\u548C\u793A\u4F8B\u5C55\u793A\u3002</li><li>\u53D7\u5230\u5E7F\u6CDB\u7684\u793E\u533A\u652F\u6301\uFF0C\u5F97\u5230\u6301\u7EED\u66F4\u65B0\u548C\u7EF4\u62A4\u3002</li></ul>',72),u=[t];function h(s,o,n,d,m,f){return r(),l("div",null,u)}var g=e(i,[["render",h]]);export{b as __pageData,g as default};
