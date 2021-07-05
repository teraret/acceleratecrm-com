package report


import grails.rest.*
import grails.converters.*


import net.sf.jasperreports.engine.JRException
import net.sf.jasperreports.engine.JasperCompileManager
import net.sf.jasperreports.engine.JasperExportManager
import net.sf.jasperreports.engine.JasperFillManager
import net.sf.jasperreports.engine.JasperPrint
import net.sf.jasperreports.engine.JasperReport
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource

class ReportController {
	static responseFormats = ['json', 'xml']
	
    def index() {
        List<Payslip> payslips = new ArrayList<>()
        Payslip payslip = new Payslip()
        payslip.setId(1)
        payslip.setName("Harish Babu B K")
        payslips.add(payslip)

        try {
            createPdfReport(payslips)

        } catch (final Exception e) {

            e.printStackTrace()
        }

        render payslips

    }



    private void createPdfReport(List<Payslip> payslips) throws IOException,  JRException {

        final InputStream stream = this.getClass().getResourceAsStream("/report.jrxml")

        final JasperReport report = JasperCompileManager.compileReport(stream)


        final JRBeanCollectionDataSource source = new JRBeanCollectionDataSource(payslips)

        final Map<String, Object> parameters = new HashMap<>()
        parameters.put("createdBy", "javacodegeek.com")
        final JasperPrint print = JasperFillManager.fillReport(report, parameters, source)
        JasperExportManager.exportReportToPdfStream(print,response.getOutputStream())
        response.setContentType("application/pdf");
        response.addHeader("Content-Disposition", "inline; filename=jasper.pdf;");


        //final String filePath = "Harish_Babu"
        //JasperExportManager.exportReportToPdfFile(print, filePath + ".pdf")
    }
}
