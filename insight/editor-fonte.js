import {EditorView, basicSetup} from 'codemirror';
import {EditorState} from '@codemirror/state';
import {html} from '@codemirror/lang-html';
import {vscodeDark} from '@uiw/codemirror-theme-vscode';
window.CMed=function(pai,texto,aoMudar,aoFoco){
  const tema=EditorView.theme({'&':{fontSize:'16px',borderRadius:'0 0 12px 12px'},'.cm-content':{fontFamily:'Menlo,ui-monospace,SFMono-Regular,monospace',padding:'10px 0 14px',minHeight:'240px'},'.cm-gutters':{fontFamily:'Menlo,ui-monospace,monospace',fontSize:'13px'},'.cm-scroller':{lineHeight:'1.55'},'&.cm-focused':{outline:'none'}});
  const view=new EditorView({parent:pai,state:EditorState.create({doc:texto,extensions:[basicSetup,html(),vscodeDark,tema,EditorView.lineWrapping,
    EditorView.contentAttributes.of({autocapitalize:'off',autocorrect:'off',spellcheck:'false'}),
    EditorView.updateListener.of(u=>{if(u.docChanged)aoMudar();if(u.focusChanged)aoFoco(u.view.hasFocus)})]})});
  return {view,
    get value(){return view.state.doc.toString()},
    set value(v){view.dispatch({changes:{from:0,to:view.state.doc.length,insert:v}})},
    poe(t){const s=view.state.selection.main;view.dispatch({changes:{from:s.from,to:s.to,insert:t},selection:{anchor:s.from+t.length},scrollIntoView:true});view.focus()},
    focus(){view.focus()}};
};
