import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditorIcon from "./EditorIcon";
import { getInstalledEditors } from "../actions/rendererActions";

interface IProps {
  editors: [];
  getInstalledEditors: () => void;
}

class ActiveEditors extends React.Component<IProps> {
  public componentDidMount(): void {
    this.props.getInstalledEditors()
  }
  public render() {
    return (
      <div>
        {this.props.editors.map(editor => (
          <EditorIcon {...editor} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ editors = [] }) => ({
  editors: editors.filter(e => e.enabled)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getInstalledEditors
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveEditors);
