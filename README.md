# WHURS-WGIS
Homework of Course Web Geo-information Serverices in Wuhan University

## Data
The data used in this project is provided by Guy J. Abel and Nikola Sander, the authors of "Quantifying Global International Migration Flows." The population migration data (http://download.gsb.bund.de/BIB/global_flow/) covers population migration across various regions of the world at five-year intervals from 1990 to 2010.

The original dataset contains geographical information such as departure regions, arrival regions, departure countries, arrival countries, and their unique identifiers. The relevant data fields include the population flow between regions (every five years) and the population flow between individual country pairs (every five years).

Since the original data does not strictly categorize regions by continents, which is essential for the intended visualization focusing on continents, the migration data for regions and countries were separated. They were reorganized and categorized by continents to facilitate visualization. Additionally, to enhance data processing speed, reduce the complexity of later SQL queries, and ensure system efficiency, the original data was processed and transformed using Python within JupyterLab. This process yielded various metrics for countries, including centrality, degree, and node strength.

## Framework
The project is implemented using Java programming language with the Spring Boot framework. It incorporates Maven and MyBatis for rapid backend development. The frontend foundation is built using native HTML, CSS, and JavaScript. The frontend page structure and styling are further enhanced using Layui and Bootstrap, while jQuery and Ajax are employed for frontend-backend interaction and page event handling. Finally, ECharts, an online data visualization library, is utilized for creating charts and maps. The project also includes a Python web crawler to gather information related to immigration themes, with some of this information being displayed in corresponding sections through download links.
