import { Editor } from '@tinymce/tinymce-react'
import { Editor as EditorTinyMCE } from 'tinymce'
import { useRef, useState } from 'react'

function TextEditor() {
  const [editorContent, setEditorContent] = useState('')

  const editorRef = useRef<EditorTinyMCE | null>(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
      setEditorContent(editorRef.current.getContent())
    }
  }

  return (
    <div>
      <Editor
        tinymceScriptSrc='/tinymce/tinymce.min.js'
        licenseKey='gpl'
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue='<h1>This is the initial content of the editor.</h1>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'preview',
            'help',
            'wordcount',
          ],
          toolbar: `
            help |
            undo redo |
            blocks |
            bold italic forecolor |
            alignleft aligncenter alignright alignjustify |
            bullist numlist outdent indent |
            removeformat |
            `,
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button onClick={log}>Log editor content</button>
      <div dangerouslySetInnerHTML={{ __html: editorContent }} />
    </div>
  )
}

export default TextEditor
