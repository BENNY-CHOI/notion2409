import EditorPage from './components/EditorPage.js'
import NewBtn from './components/NewBtn.js'
import SidebarPage from './components/SidebarPage.js'
import { request } from './utils/api.js'

export default function App({ $target }) {
    const editorDummyData = {
        title: '노션을 만들자',
        content: '노션 만들기~',
    }

    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($listContainer)
    $target.appendChild($editorContainer)

    const initalState = []
    const sidebarPage = new SidebarPage({
        $target: $listContainer,
        initalState,
    })
    sidebarPage.setState()

    const editorPage = new EditorPage({
        $target: $editorContainer,
        initialState: editorDummyData,
    })
}
