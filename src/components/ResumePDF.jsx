import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

// Create simplified styles with minimal dependencies
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
  },
  divider: {
    borderBottom: 1,
    borderBottomColor: '#000000',
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  contactItem: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    borderBottom: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 2,
  },
  paragraph: {
    marginBottom: 10,
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 11,
  },
  date: {
    fontSize: 10,
    marginBottom: 5,
  },
  bulletItem: {
    flexDirection: 'row',
    marginVertical: 2,
    paddingLeft: 10,
  },
  bulletDot: {
    width: 2.5,
    height: 2.5,
    backgroundColor: 'black',
    borderRadius: 1.25,
    marginRight: 5,
    marginTop: 5,
  },
  bulletText: {
    fontSize: 10,
    flex: 1,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  skill: {
    fontSize: 10,
    marginRight: 10,
    marginBottom: 5,
  },
});

// Basic resume document (Economist version)
const BasicResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Francis Meso</Text>
        <Text style={styles.title}>Economist & Statistical Analyst</Text>
      </View>

      <View style={styles.divider} />

      {/* Contact Info */}
      <View style={styles.contactRow}>
        <Text style={styles.contactItem}>📧 francismeso@outlook.com</Text>
        <Text style={styles.contactItem}>📱 011 354 0315</Text>
        <Text style={styles.contactItem}>📍 Nairobi, Kenya</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          Economist and statistician specializing in data-driven economic analysis and statistical modeling. 
          Expertise in Python, R, machine learning, and economic forecasting.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsRow}>
          <Text style={styles.skill}>Python</Text>
          <Text style={styles.skill}>R</Text>
          <Text style={styles.skill}>Statistical Analysis</Text>
          <Text style={styles.skill}>Machine Learning</Text>
          <Text style={styles.skill}>Data Visualization</Text>
          <Text style={styles.skill}>Time Series Analysis</Text>
          <Text style={styles.skill}>SQL</Text>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Economic Data Analyst</Text>
          <Text style={styles.company}>Self-Employed</Text>
          <Text style={styles.date}>2023 - Present</Text>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Developed economic analysis tools and statistical models
            </Text>
          </View>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Built data visualization dashboards for economic indicators
            </Text>
          </View>
        </View>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Financial Analyst Intern</Text>
          <Text style={styles.company}>Kenya National Police DT Sacco</Text>
          <Text style={styles.date}>2022 - 2023</Text>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Analyzed financial data and prepared statistical reports
            </Text>
          </View>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Assisted in economic research for strategic planning
            </Text>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>Bachelor of Economics and Statistics</Text>
        <Text style={styles.company}>University of Nairobi</Text>
        <Text style={styles.date}>2019 - 2023</Text>
      </View>
    </Page>
  </Document>
);

// ML Engineer Resume Document
const MLEResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Francis Meso</Text>
        <Text style={styles.title}>Machine Learning Engineer</Text>
      </View>

      <View style={styles.divider} />

      {/* Contact Info */}
      <View style={styles.contactRow}>
        <Text style={styles.contactItem}>📧 francismeso@outlook.com</Text>
        <Text style={styles.contactItem}>📱 011 354 0315</Text>
        <Text style={styles.contactItem}>📍 Nairobi, Kenya</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          Machine Learning Engineer with expertise in developing end-to-end ML solutions, from data preprocessing to 
          model deployment. Skilled in Python, TensorFlow, PyTorch, and production ML workflows.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsRow}>
          <Text style={styles.skill}>Python</Text>
          <Text style={styles.skill}>TensorFlow</Text>
          <Text style={styles.skill}>PyTorch</Text>
          <Text style={styles.skill}>scikit-learn</Text>
          <Text style={styles.skill}>NLP</Text>
          <Text style={styles.skill}>Deep Learning</Text>
          <Text style={styles.skill}>SQL</Text>
          <Text style={styles.skill}>Docker</Text>
          <Text style={styles.skill}>Git</Text>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Machine Learning Engineer</Text>
          <Text style={styles.company}>Independent Contractor</Text>
          <Text style={styles.date}>2023 - Present</Text>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Developed a cloud-native anomaly detection system for economic data using unsupervised learning
            </Text>
          </View>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Built NLP models to extract insights from call transcripts with 85% accuracy
            </Text>
          </View>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Created machine learning pipelines for customer churn prediction with 92% precision
            </Text>
          </View>
        </View>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Data Analysis Intern</Text>
          <Text style={styles.company}>Kenya National Police DT Sacco</Text>
          <Text style={styles.date}>2022 - 2023</Text>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Designed predictive models to identify high-risk loan applicants, reducing default rates by 15%
            </Text>
          </View>
          
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Developed automated data processing pipelines for financial reporting
            </Text>
          </View>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ML Projects</Text>
        
        <View style={styles.bulletItem}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>
            Macro Economic Engine: Cloud-native platform for anomaly detection in economic data streams
          </Text>
        </View>
        
        <View style={styles.bulletItem}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>
            Call Transcript Analyzer: NLP models for key insight extraction using BERT transformers
          </Text>
        </View>
        
        <View style={styles.bulletItem}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>
            Customer Churn Prediction: End-to-end ML pipeline using ensemble methods with SHAP for interpretability
          </Text>
        </View>
        
        <View style={styles.bulletItem}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>
            MNIST Digit Recognition: CNN model with data augmentation achieving 99.2% accuracy
          </Text>
        </View>
      </View>

      {/* Education & Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>Bachelor of Economics and Statistics</Text>
        <Text style={styles.company}>University of Nairobi</Text>
        <Text style={styles.date}>2019 - 2023</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <Text style={styles.skill}>Machine Learning Specialization - Coursera/Stanford</Text>
        <Text style={styles.skill}>Deep Learning Specialization - Coursera/DeepLearning.AI</Text>
        <Text style={styles.skill}>TensorFlow Developer Certification - Google</Text>
      </View>
    </Page>
  </Document>
);

// Export functions with better error handling
export const generateBasicResumePDF = async () => {
  try {
    console.log("Starting Economist PDF generation...");
    const blob = await pdf(<BasicResumeDocument />).toBlob();
    console.log("PDF blob created successfully");
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Francis_Meso_Economist_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error("PDF generation failed:", error);
    alert("Resume download failed. Please try again later.");
    return false;
  }
};

export const generateMLEResumePDF = async () => {
  try {
    console.log("Starting ML Engineer PDF generation...");
    const blob = await pdf(<MLEResumeDocument />).toBlob();
    console.log("PDF blob created successfully");
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Francis_Meso_ML_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error("PDF generation failed:", error);
    alert("Resume download failed. Please try again later.");
    return false;
  }
};

export default { 
  generateBasicResumePDF,
  generateMLEResumePDF,
  BasicResumeDocument,
  MLEResumeDocument
};