import { BiLogoLinkedin, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'

export function Footer() {
    return (
        <footer id="contacts" className="p-4 bg-emerald-500">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="font-bold text-2xl">&lt;devflix&gt;</h3>
                <div className="text-center text-sm">
                    <p>E-mail: devflix@contato.com</p>
                    <p>Tel: (83)99999-9999</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <BiLogoLinkedin  size={25}/>
                    <BiLogoFacebook  size={25}/>
                    <BiLogoTwitter  size={25}/>
                    <BiLogoInstagram  size={25}/>
                </div>
            </div>
        </footer>
    )
}
