using Microsoft.AspNetCore.Mvc;

namespace Bragi.Pages.api
{
    [ApiController]
    [Route("api/test")]
    public class TestApi : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Hello World!";
        }
    }
}
