import { render } from '@testing-library/react'
import { Text } from '../index'

const describeComponents = 'render text components'
describe(describeComponents, () => {
    test('should render correctly', () => {
        const { container } = render(<Text as='h1'>Hello World</Text>)
        expect(container).toMatchSnapshot()
    })
})
