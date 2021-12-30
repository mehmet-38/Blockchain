using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Blockchain.Models.Entity;
namespace Blockchain.Controllers
{
    public class AdminController : Controller
    {
        BlockchainDBEntities4 db = new BlockchainDBEntities4();
        // GET: Admin
        [Authorize]
        //Müşteri görüntüleme sayfası
        public ActionResult Index()
        {
           
            // get Stored Procedures
            var values = db.MusteriGetir().ToList();
            
            ViewBag.admin = Session["admin"];
            
            return View(values);
        }
        [Authorize]
        //Ürün görüntüleme sayfası
        public ActionResult Urunler()
        {
            var values = db.urunler.ToList();
            ViewBag.admin = Session["admin"];
            return View(values);
        }
        [Authorize]
        //Blokların gösterildiği sayfa
        public ActionResult blockChain()
        {
            ViewBag.admin = Session["admin"];
            return View();
        }
        // Satış bilgilerinin gösterildiği sayfa
        public ActionResult Satis()
        {
            ViewBag.admin = Session["admin"];
            var values = db.SatisGetir().ToList();
            return View(values);
        }
    }
}