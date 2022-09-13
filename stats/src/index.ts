import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const consoleSummary = Summary.winsAnalysisWithConsoleReport("Man United");

const htmlSummary = Summary.winsAnalysisWithHtmlReport("Chelsea");

consoleSummary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);
