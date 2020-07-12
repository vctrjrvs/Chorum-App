import React from 'react';
import SecondaryLogo from '../Components/SecondaryLogo';
import { Section } from '../Components/Utils/Utils';

export default class TermsOfUsePage extends React.Component {
     render() {
          return (
               <div className='Terms_Of_Use_Container'>

                    <Section className='Terms_Of_Use_Section'>
                         <h3 className='Terms_Of_Use_Header'>
                              Chorum Terms Of Use
                         </h3>
                         <SecondaryLogo />
                         <p className='Terms_Of_Use_Paragraph'>
                              Though these terms are not legally binding, we do require you to read and agree to them before using Chorum.
                              Chorum is currently free to use and sign up for! You don't need to make an account to search for and view information but you DO need an account to host your information here.
                              No information posted to Chorum will be sold, withheld from its rightful owners, or unlawfully used.
                         </p>

                         <h4 className='Terms_Of_Use_Header'>
                              Code Of Conduct
                         </h4>
                         <p className='Terms_Of_Use_Paragraph'>
                              For purposes of these Terms of Use, the term “Content” includes, without limitation, any User Submissions, 
                              information, data, text, photographs, scripts, graphics, and interactive features generated, provided, 
                              or otherwise made accessible by Chorum or its partners on or through the site.<br /><br />
                              As a condition of use, you promise not to use this site for any purpose that is prohibited by these Terms of Use.<br /><br />
                              The site is provided only for your own personal, non-commercial use (except with respect to artists posting Content (as defined above) as authorized through the site).<br /><br />
                              You are responsible for all of your activity in connection with this site.
                              By way of example, and not as a limitation, you shall not (and shall not permit any third party to) either 
                              (a) take any action or 
                              (b) upload, post, submit or otherwise distribute or facilitate distribution of any content on or through the site, 
                              including without limitation any User Submission, that:<br /><br />
                              - infringes any patent, trademark, trade secret, copyright, right of publicity or other right of any other person or entity or violates any law or contractual duty;<br /><br />
                              - you know is false, misleading, untruthful or inaccurate;<br /><br />
                              - is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, obscene, offensive, or profane;<br /><br />
                              - constitutes unauthorized or unsolicited advertising, junk or bulk e-mail ("spamming");<br /><br />
                              - involves commercial activities and/or sales without the site's prior written consent such as contests, sweepstakes, barter, advertising, or pyramid schemes;<br /><br />
                              - exploits people in a sexual or violent manner;<br /><br />
                              - contains viruses or any other computer codes, files, or programs that are designed or intended to disrupt, damage, limit or interfere with the proper function of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any system, data, password or other information of the site or any third party;<br /><br />
                              OR<br /><br />
                              impersonates any person or entity, including any employee or representative of the site.
                         </p>
                    </Section>
               </div>
          );
     };
};