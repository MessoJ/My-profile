import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { generateBasicResumePDF, generateMLEResumePDF } from './ResumePDF';

class ResumeDownloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleClick = async () => {
    const { type } = this.props;
    this.setState({ isLoading: true });
    
    try {
      console.log(`ResumeDownloadButton: Download initiated for ${type} resume`);
      
      if (type === 'mle') {
        await generateMLEResumePDF();
      } else {
        await generateBasicResumePDF();
      }
      
      console.log("ResumeDownloadButton: Download completed");
    } catch (error) {
      console.error('ResumeDownloadButton Error:', error);
    } finally {
      // Add a small delay so the user sees the loading state
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 800);
    }
  };

  render() {
    const { className, children, type } = this.props;
    const { isLoading } = this.state;
    
    let buttonText = "Download Resume";
    if (type === 'mle') {
      buttonText = "Download ML Engineer Resume";
    } else if (type === 'economist') {
      buttonText = "Download Economist Resume";
    }
    
    return (
      <button 
        className={className || 'resume-button'}
        onClick={this.handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <FontAwesomeIcon icon={faSpinner} spin /> Generating...
          </>
        ) : (
          children || (
            <>
              <FontAwesomeIcon icon={faDownload} /> {buttonText}
            </>
          )
        )}
      </button>
    );
  }
}

export default ResumeDownloadButton;