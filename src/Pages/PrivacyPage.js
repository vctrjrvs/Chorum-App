import React from 'react';
import SecondaryLogo from '../Components/SecondaryLogo';
import { Section } from '../Components/Utils/Utils';

export default class PrivacyPage extends React.Component {
     render() {
          return (
               <div className='Privacy_Container'>
                    <Section className='Privacy_Section'>
                         <h3 className='Privacy_Header'>
                              Chorum Privacy Policy
                         </h3>
                         <SecondaryLogo />
                         <p className='Privacy_Paragraph'>
                              In this day and age, we know that you care about how your personal information is used and shared,
                              and we take your privacy seriously.<br /><br />
                              This Privacy Policy describes how we collect, use, share, and safeguard your Personal Data when you access
                              Chorum, its domain name, features, and any other linked pages, features,
                              content, or services offered by Chorum, or otherwise interact with us.<br /><br />
                              This policy does not apply to the practices of
                              companies that Chorum does not own or control, or to individuals that Chorum does not employ or manage.<br /><br />
                              “Personal Data” means any data related to an identified or identifiable individual.
                              By accessing or using Chorum, you acknowledge that you accept the practices and policies outlined in this
                              Privacy Policy.
                         </p>

                         <h4 className='Privacy_Header'>
                              What Personal Data Does Chorum Collect?
                         </h4>
                         <p className='Privacy_Paragraph'>
                              User information,
                              such as the name, username, password, email address, photograph or other likeness,
                              settings, associations with bands and fans, and any other information you provide
                              in connection with your user account.
                         </p>
                    </Section>
               </div>
          );
     };
};