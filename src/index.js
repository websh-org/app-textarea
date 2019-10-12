import { WebShellApp } from "@websh/web-shell-app";

const textarea = document.getElementById('textarea');

WebShellApp.manifest({
  name:"Text Area",
  icon:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Icon-txt.svg",
  api: {
    test:{},
    file: {
      formats: {
        text: {
          type:"text/plain",
          open: true,
          save: true,
          new: true
        }
      }
    }
  }
})
.command('app-close', () => { WebShellApp.throw("app-close-wait") })
.command('file-open', function({format,extension,content}){
  textarea.value = content;
  return "OK";
})
.command('file-save', function({format,extension}){
  return {content:textarea.value,type:"text/plain"};
})
.command('file-new', function({format,extension}){
  textarea.value = "";
  return "OK"
});
