import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomDark as SyntaxHighlighterTheme } from 'react-syntax-highlighter/dist/styles/prism';
import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-3">Authentication</h1>
        <div className="agency">
        </div>
      </Layout>
    )
  }
}
