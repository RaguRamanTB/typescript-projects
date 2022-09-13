import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const consoleSummary = Summary.winsAnalysisWithConsoleReport("Man United");
const htmlSummary = Summary.winsAnalysisWithHtmlReport("Man City");

matchReader.load();
consoleSummary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);
