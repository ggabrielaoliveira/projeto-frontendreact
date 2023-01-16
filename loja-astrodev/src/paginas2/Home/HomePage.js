import Card from '../../componentes/Card/Card'
import Header from '../../componentes/Header/Header'
import { HomePageContainer } from './styles'
import { Body } from '../../componentes/Body/Body'
import { MainContainer } from '../../componentes/Main/styles'
import { SectionFiltros } from '../../componentes/SectionLeft/SectionLeft'
import { SectionCarrinho } from '../../componentes/SectionRight/SectionRight'
import { BodyContainer } from '../../componentes/Body/styles'
import { TesteStyle } from './teste'

function Home (props){
        const {satelites} = props
        
        const renderList = satelites.map(satelite =>{
            return(
                <Card key={satelite.id}
                img={satelite.image}
                name={satelite.name} 
                preco={satelite.preco} >
                        </Card>
                    )
                })
                console.log("chegou no home",satelites);
            return(
            <HomePageContainer>
                <Header></Header>
                <TesteStyle>
                    
                    <SectionFiltros></SectionFiltros>

                         <main>
                            {renderList}
                        </main>
                    <SectionCarrinho></SectionCarrinho>

                </TesteStyle>
        </HomePageContainer>
        )
    
}
export default Home