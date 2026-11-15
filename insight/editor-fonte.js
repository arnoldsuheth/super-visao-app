import {EditorView, basicSetup} from 'codemirror';
import {EditorState} from '@codemirror/state';
import {html} from '@codemirror/lang-html';
import {vscodeDark} from '@uiw/codemirror-theme-vscode';
import {undo,redo} from '@codemirror/commands';
window.CMed=function(pai,texto,aoMudar,aoFoco){
  const tema=EditorView.theme({'&':{fontSize:'16px',height:'100%'},'.cm-scroller':{overflow:'auto'},'.cm-content':{fontFamily:'Menlo,ui-monospace,SFMono-Regular,monospace',padding:'10px 0 40vh'},'.cm-gutters':{fontFamily:'Menlo,ui-monospace,monospace',fontSize:'13px'},'.cm-line':{lineHeight:'1.55'},'&.cm-focused':{outline:'none'}});
  const view=new EditorView({parent:pai,state:EditorState.create({doc:texto,extensions:[basicSetup,html(),vscodeDark,tema,EditorView.lineWrapping,
    EditorView.contentAttributes.of({autocapitalize:'off',autocorrect:'off',spellcheck:'false'}),
    EditorView.updateListener.of(u=>{if(u.docChanged)aoMudar();if(u.focusChanged)aoFoco(u.view.hasFocus)})]})});
  return {view,
    get value(){return view.state.doc.toString()},
    set value(v){view.dispatch({changes:{from:0,to:view.state.doc.length,insert:v}})},
    poe(t){const s=view.state.selection.main;view.dispatch({changes:{from:s.from,to:s.to,insert:t},selection:{anchor:s.from+t.length},scrollIntoView:true});view.focus()},
    focus(){view.focus()},
    desfaz(){undo(view);view.focus()},refaz(){redo(view);view.focus()},
    irLinha(n){const l=view.state.doc.line(Math.max(1,Math.min(n,view.state.doc.lines)));view.dispatch({selection:{anchor:l.from,head:l.to},scrollIntoView:true});view.focus()}};
};
