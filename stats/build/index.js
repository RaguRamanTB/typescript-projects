"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const consoleSummary = Summary_1.Summary.winsAnalysisWithConsoleReport("Man United");
const htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport("Chelsea");
consoleSummary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);
