import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomDark as SyntaxHighlighterTheme } from 'react-syntax-highlighter/dist/styles/prism';
import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-3">Агенство</h1>
        <div className="agency">
        <h1 className="display-5 center">Поисковый маркетинг</h1>
        </div>
      </Layout>
    )
  }
}
