import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import PdfImage from "../../../../assets/image/pdf-image.jpg";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const Pdf = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={PdfImage} />
        <Text style={styles.text}>
          Course Fork is an innovative online learning platform that offers a
          diverse range of courses to help individuals acquire new skills and
          enhance their existing knowledge. Our platform provides a
          comprehensive range of courses in web development, business planning,
          personal development, and graphic design, catering to the needs of
          learners from various backgrounds. Our platform is designed to make
          learning flexible and accessible, with the ability to study at your
          own pace and on your own schedule. Our courses are taught by industry
          experts who share their experience and knowledge to help learners
          reach their full potential. We believe that education should be
          accessible to all, which is why our courses are affordable,
          accessible, and of the highest quality. At Course Fork, we are
          committed to empowering learners with the knowledge and skills they
          need to succeed in their personal and professional lives. more 100
          words Whether you are looking to start a new career, upskill in your
          current job, or pursue a personal passion, Course Fork has a course
          that can help you achieve your goals. Our web development courses
          cover everything from HTML and CSS to advanced JavaScript and backend
          development. For those interested in starting their own business, our
          business planning courses provide a solid foundation in
          entrepreneurship, financial planning, and marketing strategy. Our
          personal development courses help learners cultivate essential life
          skills, such as time management, effective communication, and
          leadership. In addition, our graphic design courses provide learners
          with the technical and creative skills they need to create stunning
          visual content for their personal or professional projects. Our
          platform is user-friendly and easy to navigate, making it simple for
          learners to find and enroll in the courses that best suit their needs.
          At Course Fork, we are committed to providing a supportive learning
          environment that fosters growth and development. We offer personalized
          support and guidance to ensure that each learner can achieve their
          full potential. Join Course Fork today and take the first step towards
          achieving your personal and professional goals.
          <br />
          Whether you are looking to start a new career, upskill in your current
          job, or pursue a personal passion, Course Fork has a course that can
          help you achieve your goals. Our web development courses cover
          everything from HTML and CSS to advanced JavaScript and backend
          development. For those interested in starting their own business, our
          business planning courses provide a solid foundation in
          entrepreneurship, financial planning, and marketing strategy. Our
          personal development courses help learners cultivate essential life
          skills, such as time management, effective communication, and
          leadership. In addition, our graphic design courses provide learners
          with the technical and creative skills they need to create stunning
          visual content for their personal or professional projects. Our
          platform is user-friendly and easy to navigate, making it simple for
          learners to find and enroll in the courses that best suit their needs.
          At Course Fork, we are committed to providing a supportive learning
          environment that fosters growth and development. We offer personalized
          support and guidance to ensure that each learner can achieve their
          full potential. Join Course Fork today and take the first step towards
          achieving your personal and professional goals.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default Pdf;
