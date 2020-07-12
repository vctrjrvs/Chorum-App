import React from 'react';
import SecondaryLogo from '../Components/SecondaryLogo';
import { Section } from '../Components/Utils/Utils';

export default class CopyrightPage extends React.Component {
     render() {
          return (
               <div className='Copyright_Container'>
                    <Section className='Copyright_Section'>
                         <h3 className='Copyright_Header'>
                              Chorum Copyright Policy
                         </h3>
                         <SecondaryLogo />
                         <p className='Copyright_Paragraph'>
                              Chorum has adopted the following general policy toward claims of infringement with respect to
                              intellectual property owned or controlled by third parties in accordance with the
                              Digital Millennium Copyright Act.<br /><br />
                              It is Chorum's policy to<br /><br />
                              (1) block access to or remove material that it believes in good faith to be the intellectual property of a third party
                              (e.g., copyrights, trademarks, trade secrets, etc.) that has been illegally copied and distributed by any of our advertisers,
                              affiliates, content providers, members or users; and <br /><br />
                              (2) remove and discontinue service to repeat offenders.
                              A repeat infringer is a user for whom Chorum has received more than two notices of
                              claimed infringement or for which Chorum has had to remove content more than twice.
                              Notwithstanding the preceding sentence, Chorum reserves the right to immediately terminate the
                              account of any user for egregious infringing activities in Chorum's sole determination and discretion.
                         </p>
                    </Section>
               </div>
          );
     };
};