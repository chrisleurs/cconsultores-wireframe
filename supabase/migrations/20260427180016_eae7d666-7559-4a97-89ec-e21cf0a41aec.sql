
CREATE TABLE public.revision_edits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id TEXT NOT NULL,
  section_idx INTEGER NOT NULL,
  line_idx INTEGER NOT NULL,
  new_text TEXT NOT NULL,
  author TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (page_id, section_idx, line_idx)
);

CREATE TABLE public.revision_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id TEXT NOT NULL,
  section_idx INTEGER NOT NULL,
  comment TEXT NOT NULL,
  author TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.revision_edits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.revision_comments ENABLE ROW LEVEL SECURITY;

-- Public access policies (no auth required)
CREATE POLICY "Anyone can view edits" ON public.revision_edits FOR SELECT USING (true);
CREATE POLICY "Anyone can insert edits" ON public.revision_edits FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update edits" ON public.revision_edits FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete edits" ON public.revision_edits FOR DELETE USING (true);

CREATE POLICY "Anyone can view comments" ON public.revision_comments FOR SELECT USING (true);
CREATE POLICY "Anyone can insert comments" ON public.revision_comments FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete comments" ON public.revision_comments FOR DELETE USING (true);

-- Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.revision_edits;
ALTER PUBLICATION supabase_realtime ADD TABLE public.revision_comments;
