import React, { Component, PureComponent } from 'react';
import Styles from './programs.module.css';

const MRTabs = [
  { id: 1, title: 'Mentor Video' },
  { id: 2, title: 'Information' },
  { id: 3, title: 'Task' },
  { id: 4, title: 'Solution' },
];

class MarketResearch extends Component {
  state = {
    selectedTabId: 1,
  }

  _onTabSelect = (tab) => {
    this.setState({ selectedTabId: tab.id });
  }

  _renderSelectedMR = () => {
    switch (this.state.selectedTabId) {
      case 1: return <MarketResearchTab1 />;
      case 2: return <div>tab 2</div>;
      case 3: return <div>tab 3</div>;
      case 4: return <div>tab 4</div>;
      default: return <div>no tab seleted</div>;
    }
  }

  render() {
    const { selectedTabId } = this.state;
    return (
      <div className = {Styles.marketResearch}>
        <div className = {Styles.tabsWrapper}>
          {MRTabs.map((tab) => (
            <ItemTab
              key = {tab.id}
              tab = {tab}
              onTabSelect = {this._onTabSelect}
              isSelected = {tab.id === selectedTabId}
            />
          ))}
        </div>
        {this._renderSelectedMR()}
      </div>
    );
  }
}

class MarketResearchTab1 extends PureComponent {
  render() {
    return (
      <p className = {Styles.marketResearchTab1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
        a galley of type and scrambled it to make a type specimen book.
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
        a galley of type and scrambled it to make a type specimen book.
      </p>
    );
  }
}

class ItemTab extends Component {
  _getTabBorderColor = () => {
    if (this.props.isSelected) return '#10ADB9';
    return null;
  }

  _getTabTitleColor = () => {
    if (this.props.isSelected) return 'black';
    return null;
  }

  _onTabSelect = () => {
    this.props.onTabSelect(this.props.tab);
  }

  render() {
    const { tab } = this.props;
    return (
      <button
        type = "button"
        className = {Styles.tabWrapper}
        onClick = {this._onTabSelect}
        style = {{ borderColor: this._getTabBorderColor() }}
      >
        <div
          className = {Styles.tabTitle}
          style = {{ color: this._getTabTitleColor() }}
        >
          {tab.title}
        </div>
      </button>
    );
  }
}

export default MarketResearch;
