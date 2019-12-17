using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IncassoNewApi.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IncassoNewApi.Services;
//using IncassoNewApi.Services;

namespace IncassoNewApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {

            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();
            //services.AddDbContext<IncassoNewContext>(options => options.UseSqlServer(Configuration["ConnectionString:IncassoNewConnection"]))

            services.AddDbContext<IncassoNewDBContext>(opts => opts.UseSqlServer(Configuration["ConnectionString:IncassoNewConnection"]));
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IAdministratorService, AdministratorService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
