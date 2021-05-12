import React, { Component } from 'react';
import { RiArrowRightSLine, RiSuitcaseLine } from 'react-icons/ri';
import { IoHome, IoTimerOutline } from 'react-icons/io5';
import { BsBellFill, BsEnvelopeFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import Styles from './programs.module.css';

import MarketResearch from './market_research';
import Divider from '../../shared_ui/divider/divider';
import { GiHamburgerMenu } from 'react-icons/gi';

const CardInfo = [{
  id: 1,
  title: 'Market Research',
  type: 'Critical Thinking',
  time: 'Self Paced',
},
{
  id: 2,
  title: 'Solution Assessment',
  type: 'Reporting',
  time: 'Self Paced',
},
{
  id: 3,
  title: 'Opportunity Evaluation',
  type: 'Creativity',
  time: 'Self Paced',
},
{
  id: 4,
  title: 'Future Readiness',
  type: 'Critical Thinking',
  time: 'Self Paced',
}];

class Programes extends Component {
  state = {
    selectedProgramId: CardInfo[0].id,
  }

  _onProgramSelect = (program) => {
    this.setState({ selectedProgramId: program.id });
  }

  _getProgramInfo = () => {
    switch (this.state.selectedProgramId) {
      case 1: return <MarketResearch />;
      case 2: return <div>2</div>;
      default: return <div>No Program Selected</div>;
    }
  }

  render() {
    return (
      <div className = {Styles.root}>
        <div className = {Styles.desktopOverview}><DesktopOverview 
          selectedProgramId = {this.state.selectedProgramId}
          onProgramSelect = {this._onProgramSelect}/>
        </div>
        <div className = {Styles.mobileOverview}><MobileOverview 
          selectedProgramId = {this.state.selectedProgramId}
          onProgramSelect = {this._onProgramSelect}/>
        </div>
        <div className = {Styles.programInfoWrapper}>
          <ProgramInfoHeader />
          {this._getProgramInfo()}
        </div>
      </div>
    );
  }
}

class MobileOverview extends Component {
  state = {
    isVisible: false
  }

  _toggleVisiblity = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }))
  }


  render() {
    const { isVisible } = this.state;
    const { selectedProgramId, onProgramSelect } = this.props;
    return (
      <div>
        {!this.state.isVisible ? (
          <button
          className = {Styles.toggleButton}
          onClick = {this._toggleVisiblity}
          >
            <GiHamburgerMenu style = {{ marginRight: 5 }} />
            Overview
          </button>
        ) : null}
        <div className = {isVisible ? [Styles.overview, Styles.open].join(' ') : Styles.overview}>
          <button
          className = {Styles.overviewClose}
          onClick = {this._toggleVisiblity}
          >
            Close
          </button>
          <ProgramOverview />
          <div className = {Styles.programCardsWrapper}>
          {CardInfo.map((item) => (
            <ProgramCard
              key = {item.id}
              onSelect = {onProgramSelect}
              program = {item}
              isSelected = {item.id === selectedProgramId}
            />
          ))}
        </div>
        </div>
      </div>
    )
  }
}

class DesktopOverview extends Component {
  render() {
    const { selectedProgramId, onProgramSelect } = this.props;
    return (
      <div className = {Styles.overview}>
        <ProgramOverview />
        <div className = {Styles.programCardsWrapper}>
          {CardInfo.map((item) => (
            <ProgramCard
              key = {item.id}
              onSelect = {onProgramSelect}
              program = {item}
              isSelected = {item.id === selectedProgramId}
            />
          ))}
        </div>
      </div>
    )
  }
}

class ProgramInfoHeader extends Component {
  render() {
    return (
      <div className = {Styles.header}>
        <IoHome className = {Styles.headerIcon} />
        <BsBellFill className = {Styles.headerIcon} />
        <BsEnvelopeFill className = {Styles.headerIcon} />
        <CgProfile className = {Styles.headerIcon} />
      </div>
    );
  }
}

class ProgramOverview extends Component {
  render() {

    return (
      <div className = {Styles.programOverviewWrapper}>
        <div className = {Styles.title}>Program Overview</div>
        <Divider />

      </div>
    );
  }
}

class ProgramCard extends Component {
  _getSelectedColor = () => {
    if (this.props.isSelected) return '#10ADB9';
    return '#D4F5EE';
  }

  _onSelect = () => {
    this.props.onSelect(this.props.program);
  }

  render() {
    const { program } = this.props;
    return (
      <button onClick = {this._onSelect} className = {Styles.programCard}>
        <div className = {Styles.idWrapper} style = {{ backgroundColor: this._getSelectedColor() }}>
          {program.id}
        </div>
        <div className = {Styles.cardContent}>
          <div className = {Styles.header}>
            <div>{program.title}</div>
            <RiArrowRightSLine
              className = {Styles.rightArrow}
              size = {30}
              color = {this._getSelectedColor()}
            />
          </div>
          <div className = {Styles.footer}>
            <div className = {Styles.footerItem}>
              <RiSuitcaseLine style = {{ marginRight: 3 }} />
              {program.type}
            </div>
            <div className = {Styles.footerItem}>
              <IoTimerOutline style = {{ marginRight: 3 }} />
              <div>{program.time}</div>
            </div>
          </div>
        </div>
      </button>
    );
  }
}

export default Programes;
