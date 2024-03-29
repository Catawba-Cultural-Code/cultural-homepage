import THEME from '../THEME'
import Svg from './Svg'
import useAPI from '../hooks/useAPI'
import RichText from './RichText'
const Footer = () => {
  const { content } = useAPI()
  const { homepageFooter } = content[0].fields

  return (
    <footer
      style={{
        width: '100%',
        minHeight: 50,
        backgroundColor: THEME.navy,
        color: THEME.white,
        ...THEME.Lato,
        fontSize: 20,
        textAlign: 'center',

        paddingBottom: 50,

        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div style={{ width: '80%' }}>
        <RichText>{homepageFooter.content}</RichText>
      </div>
    </footer>
  )
}

export default Footer
