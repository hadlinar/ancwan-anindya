import React from 'react'
import Footer from '../components/footer'
import FooterLogo from '../images/anindya-logo-footer.png'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link><img src={ FooterLogo } style={{maxWidth:"250px"}} alt="anindya-logo"/></Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>About Anindya</Footer.Title>
                        <Footer.Link >An independent surveying company, providing quality and quantity superintending service for coal and minerals industry, the oil and gas sector as well as marine surveys.</Footer.Link>
                        <Footer.Link >Received permission from the Directorate General of Foreign Trade, Ministry of Trade of the Republic of Indonesia to be able to verify imported products for commodities.</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Our HQ</Footer.Title>
                        <Footer.Link>
                            Springhill Office Tower 17 th & 18th Floor
                            <br/>Jl. H. Benyamin Suaeb Ruas D7  Block D6
                            <br/>Pademangan Timur Jakarta Utara
                            <br/>DKI Jakarta 14410
                        </Footer.Link>
                        <Footer.Link><i class="fas fa-phone-alt"/>    (+62 21) 2260 6207</Footer.Link>
                        <Footer.Link><i class="fas fa-fax"/>    (+62 21) 2260 6236</Footer.Link>
                        <Footer.Link><i class="fas fa-envelope"/>    marketing@anindya.biz</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
                <Footer.Row>
                    <p style={{textAlign: "center", padding: "40px 0 10px 0", fontSize: "15px"}}>© 2021 ANINDYA. All Rights Reserved.</p>
                </Footer.Row>
        </Footer>
    )
}