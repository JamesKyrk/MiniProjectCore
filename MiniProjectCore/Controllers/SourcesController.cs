﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiniProjectCore.Data;
using MiniProjectCore.Model;

namespace MiniProjectCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SourcesController : ControllerBase
    {
        private readonly MiniDbContext _context;

        public SourcesController(MiniDbContext context)
        {
            _context = context;
        }

        // GET: api/Sources
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Source>>> GetSources()
        {
            return await _context.Sources.ToListAsync();
        }

        [HttpPost("search")]
        public async Task<ActionResult<IEnumerable<Source>>> SearchSources(Source sourceOptions)
        {
            return await _context.Sources
                            .Where(source => source.Source_Id == sourceOptions.Source_Id
                            || source.Source_Name == sourceOptions.Source_Name
                            || source.Source_Code == sourceOptions.Source_Code
                            || source.Source_Group == sourceOptions.Source_Group
                            || source.Agent_Group == sourceOptions.Agent_Group
                            ).ToListAsync();
        }

        // GET: api/Sources/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Source>> GetSource(int id)
        {
            var source = await _context.Sources.FindAsync(id);

            if (source == null)
            {
                return NotFound();
            }

            return source;
        }

        // PUT: api/Sources/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSource(int id, Source source)
        {
            if (id != source.Id)
            {
                return BadRequest();
            }

            _context.Entry(source).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SourceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sources
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Source>> PostSource(Source source)
        {
            _context.Sources.Add(source);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSource", new { id = source.Id }, source);
        }

        // DELETE: api/Sources/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSource(int id)
        {
            var source = await _context.Sources.FindAsync(id);
            if (source == null)
            {
                return NotFound();
            }

            _context.Sources.Remove(source);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SourceExists(int id)
        {
            return _context.Sources.Any(e => e.Id == id);
        }
    }
}
