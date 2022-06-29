using E_CommerceByAashish.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace E_CommerceByAashish.Controllers
{
    public class ECom : Controller
    {

        private readonly EcomContext dbcontext;
        public ECom(EcomContext _db)
        {
            dbcontext = _db;
        }
        public IActionResult Index()
        {
            var lstCategory = dbcontext.tblCategory.ToList();
            List<ProductModel> lstProdcut = new List<ProductModel>();
            lstProdcut = dbcontext.tblProduct.ToList();

            ViewBag.products = lstProdcut;
            return View(lstCategory);
        }
        public List<ProductModel> getProduct(int categoryid)
        {
            //var a = dbcontext.tblProduct.Where(x => x.CategoryId == categoryid).ToList();
            //string jsonString = JsonSerializer.Serialize(a);

            //return Json(jsonString);
            return dbcontext.tblProduct.Where(x => x.CategoryId == categoryid).ToList();
        }
        //public List <CartModel> Addtocard(int CartId)
        //{
        //    var c = dbcontext.tblCart.ToList();
        //    List<ProductModel> v = new List<ProductModel>();
        //    _ = new List<CategoryModel>();
        //    v = dbcontext.tblProduct.ToList();
        //    ViewBag.products = v;

        //    return c;



        //}
        [HttpPost] 
        public IActionResult add(CartModel model)
        {
            bool productIsPresent =  dbcontext.tblCart.Any(x => x.ProductId == model.ProductId);
            if (!productIsPresent)
            {
                if (model != null)
                {
                    if (model.CartId == 0)
                    {
                        model.Quantity = 1;
                        dbcontext.tblCart.Add(model);
                    }
                }
            }            
            dbcontext.SaveChanges();
            return RedirectToAction("index");
        }
        public IActionResult  Delete(int cart)
        {
            var a = dbcontext.tblCart.Find(cart);
            if (a == null)
            {
                return  NotFound();
            }
            else
            {
                dbcontext.Remove(a);
                dbcontext.SaveChanges();
                return View(a);
            }
        }

        public List<CartModel> GetAllCartProducts()
        {
            List<CartModel> cm = new List<CartModel>();
            cm = (from c in dbcontext.tblCart
                  join p in dbcontext.tblProduct on c.ProductId equals)
            return dbcontext.tblCart.ToList();            
        }


    }
}