import { WebShellApp } from "@websh/web-shell-app";

const textarea = document.getElementById('textarea');

WebShellApp.manifest({
  name:"Text Area",
  icon:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Icon-txt.svg",
  description: "This is the example app for WebShell.",
  version:"0.2.0",
  homepage:"https://github.com/websh-org/app-textarea#readme",
  repository:"https://github.com/websh-org/app-textarea.git",
  license:"ISC",
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
