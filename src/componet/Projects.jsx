
import React, { Component } from 'react'
import {
 AppBar,
 Tabs,
 Tab


} from '@material-ui/core';
import TabPanel from './TabPanel';
import ProjectCard from './ProjectCard';

export class Projects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first: '',
       value: 0
    }
  }

  a11yProps = (index) => {
    return  { id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  }
  
  render() {
    const {value } = this.state;

    return (
      <div>
            <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
              <Tab label="Item One" {...this.a11yProps(0)} />
              <Tab label="Item Two" {...this.a11yProps(1)} />
              <Tab label="Item Three" {...this.a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            
            <ProjectCard 
            ></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
      </div>
    )
  }
}

export default Projects
