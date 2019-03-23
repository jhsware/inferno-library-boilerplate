import { renderIntoElement } from './utils'
import Test from '../src'

// Simple test to generate markup
describe("A div", () => {
  it("Can be rendered", () => {
    const DOM = renderIntoElement(<div>Content</div>)
    
    expect(DOM.outerHTML).toBe(
      '<div>Content</div>'
    )
  })

  it("Can be rendered with class", () => {
    const DOM = renderIntoElement(<div className="base">Content</div>)
    
    expect(DOM.outerHTML).toBe(
      '<div class="base">Content</div>'
    )
  })
})
