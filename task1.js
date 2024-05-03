const parser = new DOMparser();

const xmlString = `
<list>
 <student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.FromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNameNode = nameNode.querySelector("first");
const secondNameNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const nameLang = nameNode.getAttribute('lang');
const result = {
    name: nameNode.textContent,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: nameLang,
};-
console.log('result', result);