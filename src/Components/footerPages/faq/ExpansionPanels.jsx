import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Body1 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import 'tachyons';


const styles = () => ({
  root: {
    width: '100%',
  },
});


const SimpleExpansionPanel = (props) => {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<MaterialIcon style={{ color: '#1967d2' }} icon="keyboard_arrow_down" />}>
          <Body1 style={{ color: '#1967d2' }} className="mb0">What is Arena ?</Body1>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Body1 className="mid-gray mt0">
            Arena is a contest platform cum social networking site for people who are
            interested in and want to take part in competitive programming challenges.
            People can organize contests and discuss about other contests.
            People can share and learn about several technical domains.
          </Body1>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<MaterialIcon style={{ color: '#1967d2' }} icon="keyboard_arrow_down" />}>
          <Body1 style={{ color: '#1967d2' }} className="mb0">What languages are supported and what are its specifications?</Body1>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <div className="mid-gray">
            Following are the languages and compilers supported by Arena:
            <div className="pa4 mid-gray">
              <div className="overflow-auto br3">
                <table className="f6 w-100 mw8 center">
                  <thead>
                    <tr>
                      <th className="fw6 bb tl pb3 pr3">Language</th>
                      <th className="fw6 bb tl pb3 pr3">Version</th>
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">C</td>
                      <td className="pv3 pr3 bb b--black-20">5.1.1</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">C++</td>
                      <td className="pv3 pr3 bb b--black-20">5.1.1</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">C++ 14</td>
                      <td className="pv3 pr3 bb b--black-20">5.1.1</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Go</td>
                      <td className="pv3 pr3 bb b--black-20">1.4</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Java</td>
                      <td className="pv3 pr3 bb b--black-20">jdk 8.5.1</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Javascript (spidermonkey)</td>
                      <td className="pv3 pr3 bb b--black-20">24.2.0</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Python</td>
                      <td className="pv3 pr3 bb b--black-20">2.7.10</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Python 3</td>
                      <td className="pv3 pr3 bb b--black-20"> 3.4.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<MaterialIcon style={{ color: '#1967d2' }} icon="keyboard_arrow_down" />}>
          <Body1 style={{ color: '#1967d2' }} className="mb0"> How can I take part in a contest?</Body1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Body1 className="mid-gray mt0">
            You can visit any contest from Contests page.
            Open the problem you want to solve and try to
            come up with a solution which will cover all the tasks (example + hidden).
            Submit your source code file by selecting appropriate language.
          </Body1>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<MaterialIcon style={{ color: '#1967d2' }} icon="keyboard_arrow_down" />}>
          <Body1 style={{ color: '#1967d2' }} className="mb0">How can I organize a contest?</Body1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Body1 className="mid-gray mt0">
            You can mail us a request at &nbsp;
            <a className="no-underline mid-gray i dim" href="mailto:codechef@siesgst.ac.in">
              codechef@siesgst.ac.in
            </a>
            &nbsp;
            .
          </Body1>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary expandIcon={<MaterialIcon style={{ color: '#1967d2' }} icon="keyboard_arrow_down" />}>
          <Body1 style={{ color: '#1967d2' }} className="mb0">What are ratings?</Body1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Body1 className="mid-gray mt0">
            When the contestants take part in arena contest,
            they may raise or lower their rating that reflects their performance.
            The information about rating changes and its algorithm will be added soon.
          </Body1>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary expandIcon={<MaterialIcon style={{ color: '#1967d2' }} icon="keyboard_arrow_down" />}>
          <Body1 style={{ color: '#1967d2' }} className="mb0">What are blog posts here? Who can write?</Body1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Body1 className="mid-gray mt0">
            Posts are general blog posts written by any members of this platform.
            These posts can vary in terms of domain and importance.
            We intend to keep the platform clean and as meaningful
            as we can by ensuring sensible content is provided to you.
          </Body1>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary expandIcon={<MaterialIcon style={{ color: '#1967d2' }} icon="keyboard_arrow_down" />}>
          <Body1 style={{ color: '#1967d2' }} className="mb0"> What is the specification of the machine on which code is executed?</Body1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Body1 className="mid-gray mt0">
            The Cluster is a Linux Debian Machine with 4 Core AMD CPU and 2GB RAM.
          </Body1>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
};

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
